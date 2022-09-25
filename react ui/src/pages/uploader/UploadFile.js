import React, { useState } from "react";
import { Button, MenuItem, Modal, Select } from "@material-ui/core";

// styles
import './styles.css';
import PageTitle from "../../components/PageTitle/PageTitle";

import axios from "axios";


export default function UploadFile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [filePath, setFilePath] = useState("");
  const [imgData, setimgData] = useState("");
  const list=JSON.parse(localStorage.getItem('course_details'))?.data;
  

  const listElements =list?.map(element => <MenuItem key={'menuitem_'+element.subject.replace(' ','_')}value={element.subject}>{element.subject}</MenuItem>);
  const modalView = <div className="img-upload-pane">
    <button className="img-close-btn" onClick={()=>setIsModalOpen(false)}>X</button>
    <div className="img-container">
      <PageTitle title="Upload Images " />
      <label>Select Subject : </label>
      <Select
            id="demo-simple-select-helper"
            label="course"
            value={selectedSubject}
            style={{minWidth: '150px'}}
            onChange={e=>{setSelectedSubject(e.target.value)}}
          >
            {listElements}
      </Select>
      <br/>
      <input id="file" type={'file'} onChange={onChange}/>
      <br/>
      <button className="img-upload-btn" onClick={onUpload} >Upload</button>
    </div>
  </div>
  const data = {
    subject: selectedSubject,
    imageData:imgData,
    uploadedDate:new Date().toLocaleString(),
    filePath:filePath,
    uploadedBy:localStorage.getItem('emailId')
  };
 

  function onClick(){
    setIsModalOpen(true);
    // window.open('https://newDoc.com/'+filePath);
  }

  function onUpload(){
       axios({
        url: "http://localhost:8099/fileUpload/createFile",
        method: "POST",
        headers: {
          "Access-Control-Allow-Methods":"*",
          "Access-Control-Allow-Origin": "*"
        },
        data:data
      }).then((res) => {
        setIsModalOpen(false);
         }).catch((err) => { });
  }

  function onChange(event)
  {
    var reader = new FileReader();
    reader.onload = function () {
       // var thisImage = reader.result;
        setimgData(reader.result);
        //localStorage.setItem("imgData", thisImage);
    };
    setFilePath(event.currentTarget.files[0].name);
       reader.readAsDataURL(event.currentTarget.files[0]);
  }

  return (
    <div>
      <Button onClick={onClick}>Upload</Button>
      <Modal open={isModalOpen} children={modalView} width="200px"></Modal>
    </div>
  );
}