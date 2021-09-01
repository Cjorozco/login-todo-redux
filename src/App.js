import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import AuthButton from "./components/authButton";
import HomeScreen from "./pages/HomeScreen/HomeScreen";
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import PrivateRoute from "./PrivateRoute/privateRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AuthButton />
        <div>
          <Switch>
            <Route exact path="/">
              <header className="App-header">
                LOGIN
              </header>
              <LoginScreen />
            </Route>
            <PrivateRoute path="/home">
              <HomeScreen />
            </PrivateRoute>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
