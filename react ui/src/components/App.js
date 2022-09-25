import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "../pages/login";
//import ImageUploader from "../pages/FileUpload/ImageUploader"


// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";


// context
import { useUserState } from "../context/UserContext";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/studyMaterial" />} />
        <Route
          exact
          path="/app"   
          render={() => <Redirect to="/app/studyMaterial" />}
        />
        <PublicRoute path="/login" component={Login} />


        <PrivateRoute path="/app" component={Layout} />
        <Route component={Error} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
