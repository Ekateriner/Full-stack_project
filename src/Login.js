import React from 'react';
import './App.css';
import { Button, Intent, Spinner, InputGroup, Tooltip, Card, Elevation } from "@blueprintjs/core";
import { Link } from 'react-router-dom'
import BookPreview from "./BookPreview";
import BookList from "./BookList";
import "./templates.css"

class Login extends  React.Component {
    PersonPage() {
        /*cookie.set('token', token);
        dispatch(setToken(token));
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;*/

        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        const name = urlParams.get('user_name');
        console.log(name);
        const surname = urlParams.get('user_surname');
        console.log(surname);
        const login = urlParams.get('user_login');
        console.log(login);
        const email = urlParams.get('user_email');
        console.log(email);

        cockie.set("name", name);
        cockie.set("surname", surname);
        cockie.set("lo", name);

        return (
            <div>
                <table cols="3" width="1500px">
                    <tr>
                        <td>
                            <h1>Здравствуйте, {login}</h1>
                            <img src={require("./icon.jpg")} alt="icon" width="200px"/>
                        </td>
                        <td>
                            <div className="field"> Имя: {name}</div>
                            <div className="field"> Фамилия: {surname}</div>
                            <div className="field"> Email: {email}</div>
                        </td>
                        <td>

                        </td>
                    </tr>
                </table>
            </div>

        );
    };


    render() {
        const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        const success = urlParams.get('success');
        console.log(success);
        const message = urlParams.get('message');
        console.log(message);

        return(
            <div className="App">
                <form action="http://localhost:8080/login" method="post" modelAttribute="user_name">
                    {
                        (success === "true")
                            ?
                            this.PersonPage()
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

                {
                    (success === "true")
                        ?
                        <div>
                            <Link to="/login">
                                <Button intent="primary" className="LoginButton" text="Выйти" large="true"/>
                            </Link>
                        </div>
                        :
                        <div>
                            <Link to="/signup">
                                <Button icon="add" intent="primary" className="LoginButton" text="Зарегистрироваться" large="true"/>
                            </Link>
                        </div>
                }

                <BookList/>
            </div>
        );
    }
}

export default Login;
