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
                {
                    localStorage.getItem("auth")?
                        <form action="http://localhost:8080/collect" target="_blank" method="post">
                            <input type="hidden" name="book" value={props.bookId} />
                            <input type="hidden" name="user" value={localStorage.getItem("user_id")}/>
                            <Button type="submit" intent="primary" className="LoginButton" text="Добавить в коллекцию" large="true"/>
                        </form>
                        :
                        <div/>
                }
            </Card>
        </div>
    )
};

export default BookPreview;