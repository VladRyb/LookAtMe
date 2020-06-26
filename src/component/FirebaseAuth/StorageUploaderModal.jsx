import React from 'react';
import { Upload } from 'antd';
import 'antd/dist/antd.css';

export default function StorageUploader(props) {
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={props.fileList}
        onChange={props.onChange}
        onPreview={props.onPreview}
        type="file"
      >
        {props.fileList.length < 1 && '+ Upload'}
      </Upload>
    </>
  );
}
