/*
 * Copyright 2015 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { Button, Intent, Spinner, InputGroup, Tooltip } from "@blueprintjs/core";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Book.css"
import BookPreview from "./BookPreview";

const backend_api_path = "/pagination_response.txt";

function generateUrl(state) {
    return backend_api_path;
}

class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        axios.get(generateUrl()).then((response) => {
            this.setState({
                response: JSON.parse(JSON.stringify(response.data))
            })
        });
    }

    loadPage(page) {
        axios.get(generateUrl()).then((response) => {
            this.setState({
                response: JSON.from(response.data)
            })
        });
    }

    renderTable() {
        let table = [];
        const books_number = this.state.response.books.length;

        for (let i = 0; i < books_number; i += 2) {
            let children = [];
            for (let j = i; j < Math.min(i + 2, books_number); j++) {
                const cell = this.state.response.books[j];
                table.push(<td width="50%">
                    <BookPreview isAlreadyOpened={cell.read}
                        linkToTheCover={cell.image}
                        name={cell.title}
                        author={cell.author}
                        bookId={cell.id}/></td>)
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
        return <div/>
    }
}

export default BookList;