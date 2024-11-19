import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDXm1kk2JfLDGzX50keqYdYc5aSZ8sCIuA",
  authDomain: "netflix-clone-b40ae.firebaseapp.com",
  projectId: "netflix-clone-b40ae",
  storageBucket: "netflix-clone-b40ae.firebasestorage.app",
  messagingSenderId: "148562843649",
  appId: "1:148562843649:web:54fccb0dd91336119d8800"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(' ')));
    }
}

const login=async(email,password)=>{
    try{
        await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(' ')));
    }
}
const logout=()=>{
    signOut(auth);
}

export {auth,db,signup,login,logout};