import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDZW2qKeoDiNTwnCC4gIXFJGrIxtCAvRqc",
    authDomain: "chatcommerce-9b661.firebaseapp.com",
    projectId: "chatcommerce-9b661",
    storageBucket: "chatcommerce-9b661.appspot.com",
    messagingSenderId: "540310856992",
    appId: "1:540310856992:web:b95dcb1486479c6a18e345",
    measurementId: "G-RNRP0KGL2R"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get()

    // firestore.doc()

    if (!snapshot.exists) {
        const {
            displayName,
            email
        } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.log('error creating user', err.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;