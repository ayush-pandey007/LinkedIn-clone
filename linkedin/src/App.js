import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Feed from "./Components/Feed";
import { auth } from "./Components/firebase";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import { login, logout, selectUser } from "./redux/userSlice";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(dispatch(logout()));
      }
    });
  });
  return (
    <div className="App">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="App_body">
          <Sidebar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
