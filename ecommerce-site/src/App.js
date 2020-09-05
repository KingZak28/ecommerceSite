import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
import ShopPage from "./pages/shopPage/shopPage";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
