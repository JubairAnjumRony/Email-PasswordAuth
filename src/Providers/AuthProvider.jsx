import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

import React, { createContext } from 'react';
import { auth } from '../firebase.init';

 export const AuthContext = createContext(null);

 const AuthProvider = ({children}) => {
    // const authInfo = {
    //     name: 'sakib khan is number one ....',
    const name ="context api";
        const createUser = (email,password) =>{
            return createUserWithEmailAndPassword(auth,email,password);
        }

        const signInUser = (email,password) =>{
            return signInWithEmailAndPassword(auth,email,password);
        }

        onAuthStateChanged(auth,currentUser =>{
            if(currentUser){
                console.log('current user logged in ',currentUser);
            }
            else{
                console.log("no user found");
            }
        })
        
        
        const  authInfo = {
            name,
            createUser,signInUser
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