import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/mainPage/mainPage";
import ShopPage from "./pages/shopPage/shopPage";
import CheckoutPage from "./pages/checkoutPage/checkoutPage";
import Navbar from "./components/navbar/navbar";
import SignInAndUpPage from "./pages/signInAndUpPage/signInAndUpPage";
import { auth, createUserProfileDocument } from "./firebase/firebaseUtils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from "./redux/user/userSelector";
import { createStructuredSelector } from "reselect";

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

  // The render inside the sign in route is used when you want to include some JS to determine which component to render
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndUpPage />
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}

//We need to know if we have a current user to determine whether we need to redirect from the sign in page
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  // Dispatch is a way for redux to know that the object being passed is an Action object that is going to be passed to all reducers
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// Null because we don't need to map any state to props
export default connect(mapStateToProps, mapDispatchToProps)(App);
