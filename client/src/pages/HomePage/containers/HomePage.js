import React from 'react'
import {useState, useEffect} from 'react'
import ShowLists from '../../../components/ShowLists'
import {lists} from '../listsConstant'

export default function HomePage() {
    // const [lists, setLists] = useState([]);

    // useEffect({
    // },[]);

    return (
        <div>
            <ShowLists lists={lists} />
        </div>
    )
}
