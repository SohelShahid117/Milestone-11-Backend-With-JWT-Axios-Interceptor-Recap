import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext = createContext();
export const auth = getAuth(app);


const Authproviders = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading] = useState(true);

    //https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0
    //https://firebase.google.com/docs/auth/web/start
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }


    //https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0
    useEffect(()=>{

        // onAuthStateChanged(auth, (user)=>{
        // onAuthStateChanged(auth, (currentUser)=>{
        //     setUser(currentUser);
        //     console.log('current user is :',currentUser);
        // });

        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            console.log('current user is :',currentUser);
            setLoading(false);
        });
        return ()=>{
            return unSubscribe();
        }
    },[]);

    
    //https://firebase.google.com/docs/auth/web/password-auth
    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo = {
        name:"sohel",
        user,
        createUser,
        signInUser,
        logOut
    };
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default Authproviders;