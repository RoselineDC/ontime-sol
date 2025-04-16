import { createContext, use, useContext, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useState } from "react";   


 const AuthContext = createContext();

 export const useAuth = () => {
  return useContext(AuthContext);
}
const googleProvider = new GoogleAuthProvider();

// auth provider
export const AuthProvide = ({ children }) => {
    // check user
    const [currentUser, setCurrentUser] = useState(null);
    // is loading or not
    const [loading, setLoading] = useState(true);

    // REGISTER USER
    const registerUser = async (email, password) => {
        // Add your registration logic here
        return await createUserWithEmailAndPassword(auth, email, password);

    }
    // LOGIN USER
    const loginUser = async (email, password) =>{
        return await signInWithEmailAndPassword(auth, email, password);
    }
    // gmail auth
    const signInWithGoogle = async () => {
        return await signInWithPopup(auth, googleProvider);        
    }

    // logout user
    const logoutUser = () => {
        return signOut(auth);

    }

    // manage user state
   useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth , (user) => {
            setCurrentUser(user);
            setLoading(false);

            // chech if user is available 
            if (user){
                const{email, displayName, photoURL} = user;
                const userData = {
                    email,
                    userName: displayName,
                    photoURL
                }
            }
        });
        return () => unsubscribe();
    }, []);
    // check if user is logged in or not


    const value = {
        // Add your authentication logic here
        currentUser,
        registerUser,
        loginUser,
        logoutUser,
        signInWithGoogle,
       
    };
    return (
        <AuthContext.Provider value={value}>
            {children}           
        </AuthContext.Provider>
    );
}
