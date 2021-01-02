import React from 'react'
import WishList from './WishList'

export default function ShowLists(props) {

    let {lists} = props;

    return (
        <div>
            {
                lists.map(list => {
                    return <WishList list={list}/>
                })
            }
        </div>
    )
}
