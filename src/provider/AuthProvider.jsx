import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInWithEmail = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user is', currentUser);
            setUser(currentUser);
            if (currentUser) {
                // get token and store
                const userInfo = { email: currentUser.email }
                axios.post('https://parcel-mgmt-server-gm4mzoy5m-khaledas-projects.vercel.app/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                        }
                        setLoading(false);
                    })

            }
            else {
                // remove token
                localStorage.removeItem('access-token')
                setLoading(false);
            }
            
        })

        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    const updateUserProfile = (name, photo) => {

        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    const authInfo = {
        user,
        loading,
        logOut,
        googleSignIn,
        signInWithEmail,
        createUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;