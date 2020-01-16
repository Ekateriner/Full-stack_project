import * as React from "react";
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import "./Book.css"
import BookPreview from "./BookPreview";

function generateUrl() {
    const userId = new URL(window.location.href).searchParams.get("id");
    return "http://localhost:8080/books?id=" + userId;
}

class Collection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        fetch(generateUrl())
            .then((response) => {
                return response.json();
            })
            .then((result) => {
                this.setState({
                    response: result
                })
            });
    }

    renderTable() {
        let table = [];
        const books_number = this.state.response.length;

        for (let i = 0; i < books_number; i += 2) {
            let children = [];
            for (let j = i; j < Math.min(i + 2, books_number); j++) {
                const cell = this.state.response[j];
                table.push(<td width="50%">
                    <BookPreview
                        name={cell.name}
                        annotation={cell.annotation}
                        bookId={cell.book_id}/></td>)
            }
            table.push(
                <tr>{children}</tr>
            )
        }
        return table
    }

    render() {
        if (this.state.response) {
            return (
                <table className="LoginButton">
                    <tbody>
                    {this.renderTable()}
                    </tbody>
                </table>
            )
        }
        return(
            <div>
                Ваша коллекция пуста
            </div>);
    }
}

export default Collection;