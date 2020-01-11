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
import {Button, Intent, Spinner, InputGroup, Tooltip, Elevation, Card} from "@blueprintjs/core";
import {Link} from "react-router-dom";

function getLink(id) {
    return "/book?id=" + id
}

function genButtonText(isAlreadyOpened) {
    if (isAlreadyOpened) {
        return "Продолжить читать"
    }
    return "Начать читать"
}

const BookPreview = (props) => {
    return (
        <div style={{"margin": "2%"}}>
            <Card interactive={true} elevation={Elevation.ONE}>
                <img src={props.linkToTheCover} alt={props.name} />
                <h4>{props.name}</h4>
                <p>{props.author}</p>
                <Link to={getLink(props.bookId)}>
                    <Button icon="book" intent="primary" className="LoginButton" text={genButtonText(props.isAlreadyOpened)} large="true"/>
                </Link>
            </Card>
        </div>
    )
};

export default BookPreview;