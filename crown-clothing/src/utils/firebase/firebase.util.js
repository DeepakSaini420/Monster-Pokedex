import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
 } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAhTp0D-NYLOlD7K8n0Ru44icukZMlqYZ0",
    authDomain: "crwn-clothing-db-40ba5.firebaseapp.com",
    projectId: "crwn-clothing-db-40ba5",
    storageBucket: "crwn-clothing-db-40ba5.appspot.com",
    messagingSenderId: "216166556723",
    appId: "1:216166556723:web:b74a77e191b56e1ca9af46"
};
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider); 
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const useDocRef = doc(db,'User',userAuth.uid);
    const userSnapshot = await getDoc(useDocRef);
    if(!userSnapshot.exists()){
      const {displayName , email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(useDocRef, {
          displayName,
          email,
          createdAt
        });
      } catch (error) {
        console.log(error);
      }
    }
    return useDocRef
  }