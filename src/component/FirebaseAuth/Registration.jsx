import React, { Component } from "react";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class Registration extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  usersDB = async (user) => {
    let data = await firebase
      .firestore()
      .collection("users")
      .get()
      .then((snapshot) => {
        return snapshot.docs.map((img) => img.data());
      });
    let result = data.find(
      (item) => item.uid === firebase.auth().currentUser.uid
    );
    if (!result) {
      firebase.firestore().collection("users").add({
        email: user.email,
        displayName: user.displayName,
        uid: user.uid,
        headDress: [],
        bodyDress: [],
        legsDress: [],
        lapkiDress: [],
        looks: [],
      });
    }
    console.log(result);
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isSignedIn: !!user });
      if (!user) {
        console.log("failed");
      } else {
        this.usersDB(user);
      }
    });
  };

  render() {
    return (
      <>
        <div className="App">
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In!</div>
              <button onClick={() => firebase.auth().signOut()}>
                Sign out!
              </button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="profile" src={firebase.auth().currentUser.photoURL} />
            </span>
          ) : (
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
          )}
        </div>
      </>
    );
  }
}

export default Registration;
