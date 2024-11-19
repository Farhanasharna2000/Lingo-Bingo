import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const authContext = createContext();
const AuthProvider = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const handleRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const handleLogout = () => {
        return signOut(auth)
    }

    const manageProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        user,
        setUser,
        manageProfile,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            if (currentUser) {
                setUser(currentUser)
            }
            else {
                setUser(null)

            }

            setLoading(false)
            return () => {
                unsubscribe()
            }
        })
    }, [])

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {

    children: PropTypes.array,
}
export default AuthProvider;