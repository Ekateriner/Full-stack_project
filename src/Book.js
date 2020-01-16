import * as React from "react";
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Book.css"

const backend_api_path = "http://localhost:8080/book";

function generateUrl(page) {
    const bookId = new URL(window.location.href).searchParams.get("id");
    return backend_api_path + "?id=" + bookId + "&page=" + page;
}

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            page: 1
        };
    }

    componentDidMount() {
        axios.get(generateUrl(this.state.page)).then((response) => {
            this.setState({
                response: response.data
            })
        });
    }

    loadNext() {
        this.state.page += 1;
        axios.get(generateUrl(this.state.page)).then((response) => {
            this.setState({
                response: response.data
            })
        });
    }

    loadPrev() {
        this.state.page = Math.max(1, this.state.page - 1);
        axios.get(generateUrl(this.state.page)).then((response) => {
            this.setState({
                response: response.data
            })
        });
    }

    renderEnd() {
        return (
            <div>
                <Link to="/login">
                    <Button icon="home" intent="primary" className="LoginButton" text="На главную" large="true"/>
                </Link>
                <div><b>Конец</b></div>
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
                <Button onClick={this.loadPrev.bind(this)} icon="chevron-backward" intent="primary" className="LoginButton" text="Предыдущая страница" large="true"/>
                <Button onClick={this.loadNext.bind(this)} icon="chevron-forward" intent="primary" className="LoginButton" text="Следующая страница" large="true"/>
                <div>
                    <div className="PageNumber">{this.state.page}</div>
                    <div className="PageContainer">{resp}</div>
                    <div className="PageNumber">{this.state.page}</div>
                </div>
            </div>
        )
    }

    render() {
        if (this.state.response) {
            if (this.state.response === "Конец") {
                return this.renderEnd();
            }
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