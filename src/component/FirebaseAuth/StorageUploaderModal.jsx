import React, { useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import 'antd/dist/antd.css';
import { storage } from './firebase/index';
import firebase from 'firebase';

export default function StorageUploader(props) {
  return (
    <>
      {/* <ImgCrop rotate> */}
      <Upload
        action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
        listType='picture-card'
        fileList={props.fileList}
        onChange={props.onChange}
        onPreview={props.onPreview}
        type='file'
      >
        {props.fileList.length < 1 && '+ Upload'}
      </Upload>
      {/* </ImgCrop> */}
      {/* <button onClick={handleUpload}>Upload</button> */}
    </>
  );
}
