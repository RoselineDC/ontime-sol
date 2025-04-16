import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const PrivateRoute = ({children}) => {
    const {currentUser} = useAuth(); 
    if (!currentUser) {
        return <Navigate to="/login" />;
    }
    return children;
    return (
        <Navigate to="/login" replace />
    
    );
}

export default PrivateRoute;