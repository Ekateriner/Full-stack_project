import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className="App">
            <Link to="/login">
            <Button icon="blank" intent="primary" className="LoginButton BottomMargin" text="Главная страница" large="true"/>
            </Link>
            <InputGroup
                className="BottomMargin"
                large="true"
                placeholder="Имя"
            />
            <InputGroup
                className="BottomMargin"
                large="true"
                placeholder="Фамилия"
            />
            <InputGroup
                className="BottomMargin"
                large="true"
                placeholder="Email"
            />
            <InputGroup
                className="BottomMargin"
                large="true"
                placeholder="Логин"
            />
            <InputGroup
                large="true"
                placeholder="Пароль"
                className="BottomMargin"
                type="password"/>
            <Button icon="add" intent="primary" className="LoginButton" text="Зарегистрироваться" large="true"/>
        </div>
    );
}

export default SignUp;
