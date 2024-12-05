import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

 export const AuthContext = createContext(null);

 const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    // const authInfo = {
    //     name: 'sakib khan is number one ....',
    const name ="context api";
        const createUser = (email,password) =>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth,email,password);
        }

        const signInUser = (email,password) =>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password);
        }

        // onAuthStateChanged(auth,currentUser =>{
        //     if(currentUser){
        //         console.log('current user logged in ',currentUser);
        //     }
        //     else{
        //         console.log("no user found");
        //     }
        // })

        useEffect(()=>{
            const unsubscribe =onAuthStateChanged(auth,currentUser =>{
                console.log("user",currentUser)
                setUser(currentUser);
                setLoading(true);
            })
        

            return ()=> unsubscribe();
        },[])

        const signOutUser = ()=>{
            return signOut(auth);
            setLoading(true);
        }
        
        
        const  authInfo = {
            name,
            loading,
           
            createUser,signInUser,user,signOutUser
        }
    
    return (
        <AuthContext.Provider value = {authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/*
1.create context with null as default
2.create provider
3.set the value with something (authInfo)
4.[attention please !!!]
5.use the authProvider in the main.jsx 
6.access the children inside the authProvider in the main.jsx 
7.export authContext

*/