import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip, Card, Elevation } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import BookPreview from "./BookPreview";
import BookList from "./BookList";
import "./templates.css"
import {PropTypes} from "prop-types";
import {connect} from "react-redux";
import {store} from "./index";
import {setAuth} from "./actions";

class Login extends  React.Component {
    static propTypes = {
        auth: PropTypes.bool
    };

    static defaultProps = {
        auth: false
    };

    SaveSession() {
        const queryString = window.location.search;

        const urlParams = new URLSearchParams(queryString);

        // localStorage.setItem("auth", true);

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

        store.dispatch(setAuth(true));
    }

    Out() {
        store.dispatch(setAuth(false));
        localStorage.clear();
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
        if (this.props.auth) {
            return this.PersonPage();
        }
        else {
            return this.Signin();
        }
    }
}

function mapStoreToProps(store) {
    return {
        auth: store.auth
    }
}

export default connect(mapStoreToProps)(Login);
