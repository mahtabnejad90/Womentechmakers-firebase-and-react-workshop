import React from 'react';

import TodoList from '../components/TodoList';
import firebase from "../services/firebase";

const LoggedIn = () => {
    return (
        <div className="container">
            <h1>Firebase Todo List</h1>
            <button onClick={firebase.signOut}>Log Out</button>
            <TodoList />
        </div>
    );
}

export default LoggedIn;
