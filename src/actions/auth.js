import { firebase, googleAuthProvider } from "../firebase/firebase";


export function startLogin() {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};