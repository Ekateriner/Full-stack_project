import * as React from "react";
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Book.css"

const backend_api_path = "/book_response_good.txt";

function generateUrl(state) {
    const bookId = new URL(window.location.href).searchParams.get("id");
    return backend_api_path + "?state=" + state + "&id=" + bookId;
}

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        axios.get(generateUrl("load")).then((response) => {
            this.setState({
                response: response.data
            })
        });
    }

    loadPage(page) {
        axios.get(generateUrl("load")).then((response) => {
            this.setState({
                response: response.data
            })
        });
    }

    renderError() {
        return (
            <div>
                <Link to="/login">
                    <Button icon="home" intent="primary" className="LoginButton" text="На главную" large="true"/>
                </Link>
                <div><b>Ошибка!</b> Причина: {this.state.response.reason}</div>
            </div>
        )
    }

    renderPages() {
        const resp = this.state.response;
        return (
            <div>
                <Link to="/login">
                    <Button icon="home" intent="primary" className="LoginButton" text="На главную" large="true"/>
                </Link>
                <Button onClick={this.loadPage("prev")} icon="chevron-backward" intent="primary" className="LoginButton" text="Предыдущая страница" large="true"/>
                <Button onClick={this.loadPage("next")} icon="chevron-forward" intent="primary" className="LoginButton" text="Следующая страница" large="true"/>
                <div>
                    <div className="PageNumber">{resp.number}</div>
                    <div className="PageContainer">{resp.contents}</div>
                    <div className="PageNumber">{resp.number}</div>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.response) {
            console.log(this.state.response)
            if (this.state.response.error)
                return this.renderError();
            return this.renderPages();
        }
        return (
            <div>
                <Link to="/login">
                    <Button icon="home" intent="primary" className="LoginButton" text="На главную" large="true"/>
                </Link>
                <p>Загружаем</p>
            </div>
        )
    }
}

export default Book;