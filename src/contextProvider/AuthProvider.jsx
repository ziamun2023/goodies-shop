import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext=createContext(null)
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    
    const createUserProfile=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const userSignin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userLogout=()=>{
        return signOut(auth)
    }
     
     useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)

        })
        return ()=>{
            return unsubscribe()
        }
     },[])

    const authinfo={
        user,
        createUserProfile,
        auth,
        userSignin,
        userLogout
    }
    return (
        <AuthContext.Provider  value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;