import './App.css';
import firebase from 'firebase/app';
import 'firebase/auth';






function App() {

  const loginWithGoogle = () => {

    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCre) => {
        console.log(userCre);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  );
}

export default App;
