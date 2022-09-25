import React from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import "react-datepicker/dist/react-datepicker.css";

// components
import PageTitle from "../../components/PageTitle";
import axios from "axios";

/*const datatableData = [
  {
    "id": "632d6a55e36c350dad819120f33",
    "moduleName": "ted",
    "date": '09/23/2022',
    "time": '12:00',
    "link": 'http://localhost:3000/#/app/tables',
    "updateId": "apt_2022-09-23T08:12:05.752496300Z"
},
{
  "id": "632d6a55e3dasda6c350819120f33",
  "moduleName": "tedasdad",
  "date": '09/23/2022',
  "time": '11:00',
  "link": null,
  "updateId": "apt_2022-09-23T08:12:05.752496300Z"
},
{
  "id": "asds",
  "moduleName": "teasddsd",
  "date": '09/23/2022',
  "time": '10:00',
  "link": null,
  "updateId": "apt_2022-09-23T08:12:05.752496300Z"
}];
*/
const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  
  const [value, setValue] = React.useState('10:00');
  const [data, setData] = React.useState([]);
  const [moduleName, setModuleName] = React.useState('');

  const [updateId, SetUpdateId] = React.useState('');
  const [datatableData, setDatatableData] = React.useState([]);

  const [link, setLink] = React.useState('');
  const [showForm, setShowForm] = React.useState(null); // ADD EDIT null
  const [rowSelected, setRowSelected] = React.useState(null);
  const [startDate, setStartDate] = React.useState(new Date());
  
  React.useEffect(()=>{
    axios({
      url: "http://localhost:8099/tableData/getTimeTableByCourse?course="+localStorage.getItem('course'),
      method: "Get",
      headers: {
      },
    }).then((res) => {
        setDatatableData(res.data);
        SetUpdateId(res.data.updateId);
       }).catch((err) => { });

  },[showForm])

  function onRowSelectionChange(e)
  {
    setRowSelected(datatableData[e[0].index]);
  }

function onUpdate(){  
  axios({
    url: "http://localhost:8099/tableData/updateTimeTable?updateId="+updateId,
    method: "Get",
    headers: {
    },
  }).then((res) => {
      setDatatableData(res.data);
     }).catch((err) => { });

  if(rowSelected){
    setValue(''); //rowSelected.time
    setStartDate(); // rowSelected.date
    setModuleName(rowSelected.moduleName);
    setLink(rowSelected.link)
  }
  setShowForm('EDIT');
}


  function  callApi() {
    const apiData = {moduleName: moduleName,
    date: startDate.toLocaleDateString(),
    time: value,
    link: link,
    course:localStorage.getItem('course')
}
    
    axios({
        url: "http://localhost:8099/tableData/createTimeTableEntry",
        method: "POST",
        headers: {
        },
        data:apiData
      }).then((res) => {
        setShowForm(null);
        alert("Entry Created SuccessFully");
         }).catch((err) => { }); 
         
  }

  return (
    <>
      <PageTitle title="Time Table" />
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <MUIDataTable
            data={datatableData.map(ele => {return [ele.moduleName,ele.date,ele.time,<a href={ele.link}>{ele.link}</a>]})}
            columns={["Module Name", "Date", "Time", "Link"]}
            options={{
              filterType: "checkbox",
              selectableRowsHeader: false,
              selectableRowsHideCheckboxes:false,
              selectableRows:'single',
              pagination: true,
              fixedSelectColumn:true,
              disableToolbarSelect:true,
              onRowSelectionChange:onRowSelectionChange
            }}
          />
         
        </Grid>
        {localStorage.getItem('userType') !== "Student" &&
        <Grid item md={4}>
          <IconButton onClick={()=>setShowForm('ADD')}>Add</IconButton>
          {rowSelected && <IconButton onClick={()=>onUpdate()}>Update</IconButton>}
          {showForm && (
           
          <form style={{background: 'gainsboro'}}>
          <div className="img-container">
             <label>Module Name : </label>  <input id="date" value={moduleName} type={'type'} onChange={(e)=>setModuleName(e.currentTarget.value)} />
             
             <label>Date : </label>  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
             
             <label>Time : </label>  <TimePicker value={value} onChange={(e)=>setValue(e)}/>
             
             <label>Link : </label>  <input id="link" value={link} type={'type'} onChange={(e)=>setLink(e.currentTarget.value)} />
            <br/>
            <br/>
            <Button onClick={callApi}>Save</Button>
            <br/>
            <Button className="img-upload-btn" onClick={()=>setShowForm(null)}>Cancel</Button>
          </div>
          </form>)
          }
        </Grid>
        }
      </Grid>
    </>
  );
}