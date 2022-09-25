import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

// styles
import useStyles from "./styles";
import axios from "axios";
// components
export default function Profile() {
  var classes = useStyles();
  const [list, setList] = useState([]);
  const listKeys = Object.keys(list);
  list.password = '********'

  // const listElements = 
  const hash = window.location.hash.split('#');
  const isEdit = 'edit'===hash[hash.length - 1];
  //const listEditElements = listKeys.map(element => list[element] && <div id={element} key={'course_item_' + element.replace(' ','_')} className={classes.courseItem} title={element}><span>{getName(element)}</span>-<span>{list[element]}</span></div>);
  
  React.useEffect(()=>{
    axios({
      url: "http://localhost:8099/students/getDetailsUsingMail?emailId="+localStorage.getItem('emailId'),
      method: "Get",
      headers: {
      },
    }).then((res) => {
      setList(res.data);
       }).catch((err) => { });

  },[])



  function getName(key) {
    const spaceChar = key.match(/[A-Z]/g);
    spaceChar?.forEach((ch)=>{
      key = key.replaceAll(ch,' '+ch);
    });
    key = key.replace(key.charAt(0),key.charAt(0).toUpperCase())
    return key;
  }

  function EditField(element){
    const [fieldValue, setFieldValue] = useState(list[element]);
    return <TextField
    key={element+"test"}
    id={element}
    value={fieldValue}
    onChange={e => setFieldValue(e.target.value)}
    margin="normal"
    placeholder={getName(element)}/>
  }
  
  return (
    <div>
      <div className={classes.dashedBorder}>
      <div key={'full_profile'} className={classes.profileTitle}>Profile</div>
      {
              listKeys.map(element => list[element] && 
                <div id={'entry_'+element} key={'course_item_' + element.replace(' ','_')} 
                  className={classes.courseItem} 
                  title={element}>
                    <span>{getName(element)}</span>-
                    {isEdit && element!=='emailId'? (
                      EditField(element)
                    )
                    :(<span>{list[element]}</span>)}
                </div>)
      }
      {
        isEdit && <Button
          onClick={() =>{}}
          variant="contained"
          color="primary"
          fullWidth
          style={{width:'160px',alignItem:'center'}}
          >
          Save
        </Button>
      }
      </div>
    </div>
  );
}
