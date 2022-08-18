import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext'

function ProtectedRoute({ children }) {

    const {user} = UserAuth();

    if (user) {
        return children;
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute