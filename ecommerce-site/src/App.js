import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
import ShopPage from "./pages/shopPage/shopPage";
import Navbar from "./components/navbar/navbar";
import SignInAndUpPage from "./pages/signInAndUpPage/signInAndUpPage";
import { auth } from "./firebase/firebaseUtils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // The subscriber is always listening to the auth and allows for persistence
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // After we unmount we want to close the firebase subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
