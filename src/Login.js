import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip, Card, Elevation } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import BookPreview from "./BookPreview";
import BookList from "./BookList";
import "./templates.css"

function Login() {
    var message = '${message}';
    var success = '${success}';

    return(
        <div className="App">
            <form action="http://localhost:8080/login" method="get">

                <div className="warning"> {message} </div>
                <InputGroup
                    className="BottomMargin"
                    large="true"
                    placeholder="Email"
                    name="email"
                />
                <InputGroup
                    large="true"
                    placeholder="Password"
                    className="BottomMargin"
                    type="password"
                    name="password"
                />
                <Button icon="walk"
                        intent="primary"
                        className="LoginButton BottomMargin"
                        text="Войти"
                        large="true"
                        type="submit"/>
            </form>
            <Link to="/signup">
                <Button icon="add" intent="primary" className="LoginButton" text="Зарегистрироваться" large="true"/>
            </Link>

            <BookList/>
        </div>
    );
}

export default Login;
