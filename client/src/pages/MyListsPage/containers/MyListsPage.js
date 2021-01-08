import React from 'react'
import {useState, useEffect} from 'react'
import ShowLists from '../../../components/ShowLists'
import {lists} from '../../listsConstant'


export default function MyListsPage(props) {
    // const [lists, setLists] = useState([]);

    // useEffect({
    // },[]);

    return (
        <ShowLists lists={lists} />
    )
}
