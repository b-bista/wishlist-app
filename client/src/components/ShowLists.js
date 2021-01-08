import React from 'react'
import WishList from './WishList'
import { Card } from 'react-bootstrap'

export default function ShowLists(props) {

    let {lists} = props;

    return (
        <Card>
            <h1>Subscribed lists</h1>
            {

                lists && lists.length ? (
                    lists.map(list => {
                        return <WishList list={list}/>
                    })
                )
                :
                (
                    "You are currently not subscribed to any lists."
                )
                
            }
        </Card>
    )
}
