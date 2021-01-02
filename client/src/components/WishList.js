import React from 'react'

function ListItem(item, index){
    let {name, comment, link} = item;

    return (
        <div>
            <p>{index+1}</p>
            <p>{name}</p>
            <p>{comment}</p>
            <p>{link}</p>
        </div>
    )
};

export default function WishList(props) {
    let {title, descrition, author, dateCreated, } = props.list;

    const items = [
        {
            name: "name1",
            comment: "comment1",
            link: "link1"
        },
        {
            name: "name2",
            comment: "comment2",
            link: "link2"
        },
        {
            name: "name3",
            comment: "comment3",
            link: "link3"
        },
        {
            name: "name4",
            comment: "comment4",
            link: "link4"
        },
    ]

    return (
        <div>
            <p>{title}</p>
            <p>{descrition}</p>
            <p>{author}</p>
            {items.map(item => {
                return ListItem(item, items.indexOf(item));
            })}
        </div>
    )
}
