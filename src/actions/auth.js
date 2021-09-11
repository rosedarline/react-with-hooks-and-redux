import { firebase, googleAuthProvider } from "../firebase/firebase";

 export function login(uid) {
    return  {
        type: "LOGIN",
        uid
    }
 } ;

export function startLogin() {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export function logout() {
    return {
        type: "LOGOUT"
    }
};

export function startLogout() {
    return () => {
        return firebase.auth().signOut();
    };
};