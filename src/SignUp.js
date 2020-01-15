import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import "./templates.css"

function SignUp() {
    return (
        <div className="App">
            <Link to="/login">
            <Button icon="blank" intent="primary" className="LoginButton BottomMargin" text="Главная страница" large="true"/>
            </Link>
            <form action="http://localhost:8080/signup" method="post">
                <InputGroup
                    className="BottomMargin"
                    large="true"
                    placeholder="Имя"
                    name="name"
                 />
                 <InputGroup
                     className="BottomMargin"
                     large="true"
                     placeholder="Фамилия"
                     name="surname"
                 />
                 <InputGroup
                     className="BottomMargin"
                     large="true"
                     placeholder="Email"
                     name="email"
                 />
                 <InputGroup
                     className="BottomMargin"
                     large="true"
                     placeholder="Логин"
                     name="login"
                 />
                 <InputGroup
                     large="true"
                     placeholder="Пароль"
                     className="BottomMargin"
                     type="password"
                     name="password"
                 />
                 <Button
                     type="submit"
                     icon="add"
                     intent="primary"
                     className="LoginButton"
                     text="Зарегистрироваться"
                     large="true"
                 />
            </form>
        </div>
    );
}

export default SignUp;
