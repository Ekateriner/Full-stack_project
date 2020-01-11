import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip, Card, Elevation } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import BookPreview from "./BookPreview";
import BookList from "./BookList";

function Login() {
    return (
        <div className="App">
            <InputGroup
                className="BottomMargin"
                large="true"
                placeholder="Login"
            />
            <InputGroup
                large="true"
                placeholder="Password"
                className="BottomMargin"
                type="password"/>
            <Button icon="walk" intent="primary" className="LoginButton BottomMargin" text="Войти" large="true"/>
            <Link to="/signup">
                <Button icon="add" intent="primary" className="LoginButton" text="Зарегистрироваться" large="true"/>
            </Link>

            <BookList />
        </div>
    );
}

export default Login;
