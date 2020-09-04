import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";

const HatsPage = () => <h1>YOOOO HATS PAGE</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
