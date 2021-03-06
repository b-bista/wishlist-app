import React from 'react'
import {useState, useEffect} from 'react'
import ShowLists from '../../../components/ShowLists'
import CreateList from '../../../components/CreateList'
import {lists} from '../../listsConstant'

export default function HomePage(props) {
    // const [lists, setLists] = useState([]);

    // useEffect({
    // },[]);

    return (
        <div>
            <CreateList />
            <ShowLists lists={lists} />
        </div>
    )
}
