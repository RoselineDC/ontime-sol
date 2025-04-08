import { createContext, useContext } from "react";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";   



 const AuthContext = createContext();
 export const useAuth = () => {
  return useContext(AuthContext);
}

// auth provider
export const AuthProvide = ( {children}) => {
    // check user
    const [currentUser, setCurrentUser] = useState(null);
    // is loading or not
    const [loading, setLoading] = useState(true);

    // REGISTER USER
    const registerUser = async (email, password) => {
        // Add your registration logic here
        return await createUserWithEmailAndPassword(auth, email, password);

    }


    const value = {
        // Add your authentication logic here
        currentUser,
        registerUser
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
           
        </AuthContext.Provider>
    );
}
