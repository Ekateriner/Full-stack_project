import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip, Card, Elevation } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import BookPreview from "./BookPreview";
import BookList from "./BookList";
import "./templates.css"

class Login extends  React.Component {
    SaveSession() {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        localStorage.setItem("auth", true);

        const name = urlParams.get('user_name');
        localStorage.setItem("name", name);
        const surname = urlParams.get('user_surname');
        localStorage.setItem("surname", surname);
        const login = urlParams.get('user_login');
        localStorage.setItem("login", login);
        const email = urlParams.get('user_email');
        localStorage.setItem("email", email);
        const id = urlParams.get('user_id');
        localStorage.setItem("user_id", id);

        window.location.replace("http://localhost:3000/login");
    }

    Out() {
        localStorage.clear();

        window.location.replace("http://localhost:3000/login");
    }


    PersonPage() {
        return (
            <div>
                <table cols="3" width="100%">
                    <tr>
                        <td>
                            <h1>Здравствуйте, {localStorage.getItem("login")}</h1>
                            <img src={require("./icon.jpg")} alt="icon" width="200px"/>
                        </td>
                        <td>
                            <div className="field"> Имя: {localStorage.getItem("name")}</div>
                            <div className="field"> Фамилия: {localStorage.getItem("surname")}</div>
                            <div className="field"> Email: {localStorage.getItem("email")}</div>
                        </td>
                        <td>
                            <div className="container">
                                <div className="clock">
                                    <div className="clock-inner">
                                        <div className="clock-minutes"></div>
                                        <ul className="clock-numbers">
                                            <li>XII</li>
                                            <li>III</li>
                                            <li>VI</li>
                                            <li>IX</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>

                <div>
                    <Button onClick={this.Out.bind(this)} intent="primary" className="LoginButton" text="Выйти" large="true"/>
                </div>

                <BookList/>
            </div>
        );
    };

    Signin() {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);
        const success = urlParams.get('success');
        const message = urlParams.get('message');

        return(
            <div className="App">
                <form action="http://localhost:8080/login" method="post" modelAttribute="user_name">
                    {
                        (success === "true")
                            ?
                            this.SaveSession()
                            :
                            <div>
                                { (!message)
                                    ?
                                    <div/>
                                    :
                                    <div className="warning"> {message} </div>
                                }
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
                            </div>
                    }
                </form>

                <div>
                    <Link to="/signup">
                        <Button icon="add" intent="primary" className="LoginButton" text="Зарегистрироваться" large="true"/>
                    </Link>
                </div>

                <BookList/>
            </div>
        );
    }


    render() {
        if (localStorage.getItem("auth") != null && localStorage.getItem("auth")) {
            return this.PersonPage();
        }
        else {
            return this.Signin();
        }
    }
}

export default Login;
