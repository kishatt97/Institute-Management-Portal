import React from "react";
import axios from "axios";


var UserStateContext = React.createContext();
var UserDispatchContext = React.createContext();
var loginDetails;

function userReducer(state, action) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, isAuthenticated: true };
    case "SIGN_OUT_SUCCESS":
      return { ...state, isAuthenticated: false };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function UserProvider({ children }) {
  var [state, dispatch] = React.useReducer(userReducer, {
    isAuthenticated: !!localStorage.getItem("id_token"),
  });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
}

function useUserState() {
  var context = React.useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUserState must be used within a UserProvider");
  }
  return context;
}

function useUserDispatch() {
  var context = React.useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error("useUserDispatch must be used within a UserProvider");
  }
  return context;
}
// ###########################################################
var responseData;
 const loginUser = async(dispatch, login, password, history, setIsLoading, setError) => {
  setError(false);
  setIsLoading(true);


  loginDetails = await axios({
    url: "http://localhost:8099/students/login"+"?emailId="+login+"&password="+password,
    method: "GET",
    headers: {
    },
  }).then((res) => {
    responseData = res.data;
    if(responseData === ''){
      alert("Invalid Username Or Password");
    } else {
      alert("Successfully Logged In");
    }
      return res.data;
     }).catch((err) => { });
  if (loginDetails) {
    setTimeout(() => {
      localStorage.setItem('firstName',loginDetails.firstName)
      localStorage.setItem('lastName',loginDetails.lastName)
      localStorage.setItem('userType',loginDetails.userType)
      localStorage.setItem('emailId',loginDetails.emailId)
      localStorage.setItem('course',responseData.course)
   
      setError(null)
      setIsLoading(false)
      dispatch({ type: 'LOGIN_SUCCESS' })

      history.push('/app/studyMaterial')
    }, 2000);
  } else {
    setError(true);
    setIsLoading(false);
  }
}

function signOut(dispatch, history) {
  localStorage.clear();
  dispatch({ type: "SIGN_OUT_SUCCESS" });
  history.push("/login");
}
export { UserProvider, useUserState, useUserDispatch, loginUser, signOut };
