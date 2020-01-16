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
                <p>{props.annotation}</p>
                <Link to={getLink(props.bookId)}>
                    <Button icon="book" intent="primary" className="LoginButton" text={genButtonText(props.isAlreadyOpened)} large="true"/>
                </Link>
            </Card>
        </div>
    )
};

export default BookPreview;