import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
import ShopPage from "./pages/shopPage/shopPage";
import Navbar from "./components/navbar/navbar";
import SignInAndUpPage from "./pages/signInAndUpPage/signInAndUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // The subscriber is always listening to the auth and allows for persistence
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // We're going to use the user reference to check if the DB has actually updated
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // To get the data off the snapshot we need to call the .data() method but the original snapshot obj has the ID
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      }
      // Once we sign out user auth will be set to Null
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    // After we unmount we want to close the firebase subscription
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndUpPage}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // Dispatch is a way for redux to know that the object being passed is an Action object that is going to be passed to all reducers
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Null because we don't need to map any state to props
export default connect(null, mapDispatchToProps)(App);
