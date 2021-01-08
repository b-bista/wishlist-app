import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'

function ListItem(item, index){
    let {name, comment, link} = item;

    return (
        <ListGroup.Item>
            <p>{name}</p>
            <p>{comment}</p>
            <p>{link}</p>
        </ListGroup.Item>
    )
};

export default function WishList(props) {
    let {title, descrition, author, dateCreated, items} = props.list;

    return (
        <Card>
        <Card.Body>
            <div>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{descrition}</Card.Text>
                <Card.Text>{author}</Card.Text>
                <Card.Text>{dateCreated}</Card.Text>
            </div>
            <ListGroup variant="flush">
                {
                    items.map(item => {
                        return ListItem(item, items.indexOf(item));
                    })
                }
            </ListGroup>
        </Card.Body>
        </Card>
    )
}
