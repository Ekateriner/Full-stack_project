import * as React from "react";
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Book.css"
import BookPreview from "./BookPreview";

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/all_books")
            .then((response) => {
                return response.json();
            })
            .then((result) => {
            this.setState({
                response: result
            })
        });
    }

    // loadPage(page) {
    //     axios.get(generateUrl()).then((response) => {
    //         this.setState({
    //             response: JSON.from(response.data)
    //         })
    //     });
    // }

    renderTable() {
        console.log("CATASTROFA", this.state);
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
        console.log("bad");
        return <div/>
    }
}

export default BookList;