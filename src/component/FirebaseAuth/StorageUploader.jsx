import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';
import { storage } from './firebase/index';
import firebase from 'firebase';

export default function StorageUploader() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${fileList[0].name}`)
      .put(fileList[0].originFileObj);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref('images')
          .child(fileList[0].name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            firebase.firestore().collection('images').add({
              url: url,
              user: firebase.auth().currentUser.uid,
            });
          });
      }
    );
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <>
    <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        type="file"
      >
        {fileList.length < 9 && "+ Upload"}
      </Upload>

    </ImgCrop>

      <button onClick={handleUpload}>Upload</button>
    </>
  );
}
