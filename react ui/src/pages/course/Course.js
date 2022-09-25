import React, {  useState } from "react";
// styles
import useStyles from "./styles";

// components
import PageTitle from "../../components/PageTitle/PageTitle";
import axios from "axios";

export default function Course() {
  var classes = useStyles();
  var data;
  const courseName = localStorage.getItem('course');
  const [list, setList] = useState([]);
  const listElements =list?.map(element => <div key={'course_item_' + element.subject.replace(' ','_')} className={classes.courseItem} title={element.subject}><span>{element.subject}</span>-<span>{element.duration}</span></div>);
  
  React.useEffect(()=>{
    axios({
      url: "http://localhost:8099/students/getAllSubjectsByCourse"+"?course="+courseName,
      method: "Get",
      headers: {
      },
      data:data
    }).then((res) => {
      localStorage.setItem('course_details',JSON.stringify(res));
      setList(res.data);
       }).catch((err) => { });
  
  },[data,courseName])
 
  return (
    <div>
      <PageTitle title={"Enroll course : "+ courseName} />
      <div className={classes.dashedBorder}>
      <div key={'course_item_list'} className={classes.courseItem} style={{backgroundColor:'#536dfe9c'}}title='Subject Name'><span>{'Subject Name'}</span>-<span>{'Duration'}</span></div>
      {listElements}
      </div>
    </div>
  );
}
