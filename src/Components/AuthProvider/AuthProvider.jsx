import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


export const authContext=createContext();
const AuthProvider = ({children}) => {

const googleProvider = new GoogleAuthProvider();
const[user,setUser]=useState([])

const handleRegister=(email, password)=>{
     createUserWithEmailAndPassword(auth, email, password)
}
const handleLogin=(email, password)=>{
     signInWithEmailAndPassword(auth, email, password)
}
const handleGoogleLogin=()=>{
    signInWithPopup(auth, googleProvider)
}
const handleLogout=()=>{
     signOut(auth)
}
const authInfo={
    handleRegister,
    handleLogin,
    handleGoogleLogin,
    handleLogout
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
console.log(currentUser);

        return ()=>{
            unsubscribe()
        }
    })
},[])
    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;