import React, { useState } from "react";
import axios from "axios";
import Multiselect from 'multiselect-react-dropdown';



import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  //Box
} from "@material-ui/core";
import { withRouter } from "react-router-dom";

// styles
import useStyles from "./styles";

// logo
import logo from "./logo.svg";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

const reload=()=>window.location.reload();

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);
  var [fNameValue, setFNameValue] = useState("");
  var [lNameValue, setLNameValue] = useState("");
  var [loginValue, setLoginValue] = useState("");
  var [passwordValue, setPasswordValue] = useState("");
  var [courseValue, setCourseValue] = useState("");
  var [genderValue, setGenderValue] = useState("");

  var [userTypeValue, setuserType] = useState("");

  var [hscMarksValue, sethscMarks] = useState("");
  var [sscMarksValue, setsscMarks] = useState("");
  var [graduationMarksValue, setgraduationMarks] = useState("");
  var [moduleTakenByFacultyValue, setmoduleTakenByFaculty] = useState("");
  var [qualificationOfFacultyValue, setqualificationOfFaculty] = useState("");
  var [yearOfExperienceOfFacultyValue, setyearOfExperienceOfFaculty] = useState("");





const signup =()=>  {

  const data = {
    firstName: fNameValue,
    lastName: lNameValue,
    emailId: loginValue,
    gender: genderValue,
    password: passwordValue,
    course:courseValue,
    userType:userTypeValue, //new field added
    hscMarks:hscMarksValue,
    sscMarks:sscMarksValue,
    graduationMarks:graduationMarksValue,
    moduleTakenByFaculty:moduleTakenByFacultyValue,
    qualificationOfFaculty:qualificationOfFacultyValue,
    yearOfExperienceOfFaculty:yearOfExperienceOfFacultyValue
  };

  axios({
    url: "http://localhost:8099/students/createUser",
    method: "POST",
    headers: {
    },
    data:data
  }).then((res) => {
    alert("User Created SuccessFully");
     reload();
     }).catch((err) => { });
}

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={logo} alt="logo" className={classes.logotypeImage} />
        <Typography className={classes.logotypeText}>Cdac Student Portal</Typography>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="New User" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <div className={classes.formDividerContainer}>
                {}
              </div>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  
                </Typography>
              </Fade>
              <TextField
                id="email"
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                id="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      loginValue.length === 0 || passwordValue.length === 0
                    }
                    onClick={() =>
                      loginUser(
                        userDispatch,
                        loginValue,
                        passwordValue,
                        props.history,
                        setIsLoading,
                        setError,
                      )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              {}
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  
                </Typography>
              </Fade>
              
              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">User Type</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="course"
                value={userTypeValue}
                onChange={e => setuserType(e.target.value)}
              >
                <MenuItem value={"Admin"}>Admin</MenuItem>
                <MenuItem value={"Faculty"}>Faculty</MenuItem>
                <MenuItem value={"Student"}>Student</MenuItem>
              </Select>
              </FormControl>

              {userTypeValue === "Admin" && (
                <React.Fragment>
              <TextField
                id="fName"
                value={fNameValue}
                onChange={e => setFNameValue(e.target.value)}
                margin="normal"
                placeholder="First Name"
                type="text"
                fullWidth
              />
              <TextField
                id="lName"
                value={lNameValue}
                onChange={e => setLNameValue(e.target.value)}
                margin="normal"
                placeholder="Last Name"
                type="text"
                fullWidth
              />
                <TextField
                id="email"
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />

              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Gender"
                value={genderValue}
                onChange={e => setGenderValue(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
              </FormControl>
            
              <TextField
                id="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />

              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
                <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="course"
                  value={courseValue}
                  onChange={e => setCourseValue(e.target.value)}
                >
                  <MenuItem value={"PgDac"}>PgDac</MenuItem>
                  <MenuItem value={"PgDbda"}>PgDbda</MenuItem>
                </Select>
              </FormControl>

      </React.Fragment>
               )}

               {userTypeValue === "Faculty" && (
                <React.Fragment>
              <TextField
                id="fName"
                value={fNameValue}
                onChange={e => setFNameValue(e.target.value)}
                margin="normal"
                placeholder="First Name"
                type="text"
                fullWidth
              />
              <TextField
                id="lName"
                value={lNameValue}
                onChange={e => setLNameValue(e.target.value)}
                margin="normal"
                placeholder="Last Name"
                type="text"
                fullWidth
              />
                <TextField
                id="email"
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />

              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Gender"
                value={genderValue}
                onChange={e => setGenderValue(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
              </FormControl>
            
              <TextField
                id="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />


            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="course"
                value={courseValue}
                onChange={e => setCourseValue(e.target.value)}
              >
                <MenuItem value={"PgDac"}>PgDac</MenuItem>
                <MenuItem value={"PgDbda"}>PgDbda</MenuItem>
              </Select>
            </FormControl>

              <TextField
                id="moduleTakenByFaculty"
                value={moduleTakenByFacultyValue}
                onChange={e => setmoduleTakenByFaculty(e.target.value)}
                margin="normal"
                placeholder="Module Name"
                type="text"
                fullWidth
              />

              <TextField
                id="qualificationOfFaculty"
                value={qualificationOfFacultyValue}
                onChange={e => setqualificationOfFaculty(e.target.value)}
                margin="normal"
                placeholder="Qualification"
                type="text"
                fullWidth
              />

              
              <TextField
                id="yearOfExperienceOfFaculty"
                value={yearOfExperienceOfFacultyValue}
                onChange={e => setyearOfExperienceOfFaculty(e.target.value)}
                margin="normal"
                placeholder="Year Of Experience"
                type="text"
                fullWidth
              />
      </React.Fragment>
               )}

              
              
            {userTypeValue === "Student" && (
                <React.Fragment>
              <TextField
                id="fName"
                value={fNameValue}
                onChange={e => setFNameValue(e.target.value)}
                margin="normal"
                placeholder="First Name"
                type="text"
                fullWidth
              />
              <TextField
                id="lName"
                value={lNameValue}
                onChange={e => setLNameValue(e.target.value)}
                margin="normal"
                placeholder="Last Name"
                type="text"
                fullWidth
              />
                <TextField
                id="email"
                value={loginValue}
                onChange={e => setLoginValue(e.target.value)}
                margin="normal"
                placeholder="Email Address"
                type="email"
                fullWidth
              />

              <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="Gender"
                value={genderValue}
                onChange={e => setGenderValue(e.target.value)}
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
              </FormControl>
            
              <TextField
                id="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />

            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth={true}>
              <InputLabel id="demo-simple-select-helper-label">Course</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                label="course"
                value={courseValue}
                onChange={e => setCourseValue(e.target.value)}
              >
                <MenuItem value={"PgDac"}>PgDac</MenuItem>
                <MenuItem value={"PgDbda"}>PgDbda</MenuItem>
              </Select>
            </FormControl>

            <TextField
                id="hscMarks"
                value={hscMarksValue}
                onChange={e => sethscMarks(e.target.value)}
                margin="normal"
                placeholder="Hsc Marks"
                type="text"
                fullWidth
              />

              <TextField
                id="sscMarks"
                value={sscMarksValue}
                onChange={e => setsscMarks(e.target.value)}
                margin="normal"
                placeholder="Ssc Marks"
                type="text"
                fullWidth
              />

              <TextField
                id="graduationMarks"
                value={graduationMarksValue}
                onChange={e => setgraduationMarks(e.target.value)}
                margin="normal"
                placeholder="Graduation Marks"
                type="text"
                fullWidth
              />

      </React.Fragment>
               )}
              

    
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    onClick={() =>
                      signup(
                        // userDispatch,
                        // loginValue,
                        // passwordValue,
                        // props.history,
                        // setIsLoading,
                        // setError,
                      )
                    }
                    disabled={
                      loginValue.length === 0 ||
                      passwordValue.length === 0
                    }
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);