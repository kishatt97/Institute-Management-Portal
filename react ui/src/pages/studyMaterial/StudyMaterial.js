import React, { useState } from "react";
import { Grid, MenuItem, Select } from "@material-ui/core";

// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import DocPreview from "../../components/DocPreview/DocPreview";
import UploadFile from "../uploader/UploadFile";

import axios from "axios";

export default function StudyMaterial() {
  var classes = useStyles();
  const courseName = localStorage.getItem('course');
  const [list, setList] = useState([]);
  const [listImage, setListImage] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("All");
  const listElements = list?.map(element => <MenuItem key={'menuitem_'+element.subject.replace(' ','_')}value={element.subject}>{element.subject}</MenuItem>);

  React.useEffect(()=>{
  axios({
    url: "http://localhost:8099/students/getAllSubjectsByCourse?course="+courseName,
    method: "Get",
    headers: {
    },
  }).then((res) => {
    localStorage.setItem('course_details',JSON.stringify(res));
    setList(res.data);
     }).catch((err) => { });
  },[courseName])

 

     function onChangeList(event){
      setSelectedSubject(event.target.value);

      axios({
        url: "http://localhost:8099/fileUpload/getAllBySubject?subject="+event.target.value,
        method: "Get",
        headers: {
        },
      }).then((res) => {
        setListImage(res.data);
        console.log(res.data);
         }).catch((err) => { });
    }

  return (
    <>
      <PageTitle title={"Study Material for "+ courseName} />
      <div className={classes.dashedBorder} style={{display: 'flex', justifyContent: 'space-around'}}>
        <div>Your Course: <span id="course">PG-DAC</span></div>
        <label>Subject</label>
        <Select
          id="demo-simple-select-helper"
          label="course"
          value={selectedSubject}
          style={{minWidth: '150px'}}
          onChange={onChangeList}
        >
          {listElements}
        </Select>
        <UploadFile></UploadFile>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={12} style={{display: 'flex', flexWrap: 'wrap'}}>
          {listImage.map ((img)=>{return <DocPreview title={img.subject} uploadedBy={img.uploadedBy} imageData={img.imageData} uploadedDate={img.uploadedDate} filePath={img.filePath}></DocPreview>})}
        </Grid>
      </Grid>
    </>
  );
}


