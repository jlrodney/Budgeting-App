import { firebase, googleAuthProvider } from '../firebase/firebase';


export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

const startLogin = () => {
  return() => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export default startLogin

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
