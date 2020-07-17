import React from 'react';
import LoginForm from "../components/LoginForm";
import firebase from "../services/firebase";

const LoggedOut = () => {
    return (
        <div className="container">
            <h1>Firebase Todo List</h1>
            <LoginForm />
        </div>
    );
}
export default LoggedOut;
