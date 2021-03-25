import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserContext } from "./context/user_context";
import AddReminderScreen from "./screens/add_reminder";

import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import HomeScreen from "./screens/home";

const AppRoutes = () => {
  const user = React.useContext(UserContext);
  console.log(user.isAuth);

  return (
    <Switch>
      <Route path="/register">
        <RegisterScreen />
      </Route>
      <Route path="/login">
        <LoginScreen />
      </Route>
      {user.isAuth ? (
        <Route path="/add-reminder">
          <AddReminderScreen />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}
      {user.isAuth ? (
        <Route path="/home">
          <HomeScreen />
        </Route>
      ) : (
        <Redirect to="/login" />
      )}
      <Redirect from="/" to="/home" />
    </Switch>
  );
};

export default AppRoutes;
