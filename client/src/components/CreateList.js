import React from 'react'
import { useState, useEffect } from 'react'
import {Card} from 'react-bootstrap'

export default function CreateList() {

    const [listInfo, setListInfo] = useState({
        title: '',
        description: '',
        notes: ''
    });

    const [listItems, setListItems] = useState([])

    const [currentItem, setCurrentItem] = useState({
        name: '',
        comment: '',
        link: ''
    })

    const handleListInfoChange = e => {
        const {name, value} = e.target
        setListInfo({...listInfo, [name]: value})
    }

    const handleListItemsChange = (idx, name, value) => {
        let newListItems = listItems;

        newListItems.splice(idx,1,{...newListItems[idx], [name]: value})

        setListItems([...newListItems]);
    }

    const handleCurrentItemChange = e => {
        const {name, value} = e.target
        setCurrentItem({...currentItem, [name]: value})
    }

    const addItem = (e) => {
        e.preventDefault();
        setListItems([...listItems, {...currentItem}]);
        setCurrentItem({
            name: '',
            comment: '',
            link: ''
        })
    }

    const removeItem = (idx) => {
        let list = listItems;

        list.splice(idx, 1);

        setListItems([...list]);
    }

    return (
        <Card style={{textAlign: 'center'}}>
            <h1>
                Create a list
            </h1>
            <form>
                <label>
                Title:
                <input type="text" name="title" value={listInfo.title} onChange={handleListInfoChange} />
                </label>
                <label>
                Description:
                <input type="text" name="description" value={listInfo.description} onChange={handleListInfoChange} />
                </label>
                <label>
                Notes:
                <input type="text" name="notes" value={listInfo.notes} onChange={handleListInfoChange} />
                </label>
                
                <br></br>
                {
                   listItems && listItems.map(listItem => {

                       const itemIdx = listItems.indexOf(listItem)

                       return (
                           <div>
                               <label>
                                Name:
                                <input type="text" name="name" value={listItem.name} onChange={(e) => {
                                    e.preventDefault();
                                    const {name, value} = e.target; 
                                    handleListItemsChange(itemIdx, name, value);
                                    }} />
                                </label>
                                <label>
                                Comment:
                                <input type="text" name="comment" value={listItem.comment} onChange={(e) => {
                                    e.preventDefault();
                                    const {name, value} = e.target; 
                                    handleListItemsChange(itemIdx, name, value);
                                    }} />
                                </label>
                                <label>
                                URL:
                                <input type="text" name="link" value={listItem.link} onChange={(e) => {
                                    e.preventDefault();
                                    const {name, value} = e.target; 
                                    handleListItemsChange(itemIdx, name, value);
                                    }} />
                                </label>
                
                                <input type="button" value="-" onClick={ (e) => {
                                    e.preventDefault();
                                    removeItem(itemIdx);
                                }}/>
                                <br></br>
                           </div>
                        
                       )
                   })
                }
                <label>
                Name:
                <input type="text" name="name" value={currentItem.name} onChange={handleCurrentItemChange} />
                </label>
                <label>
                Comment:
                <input type="text" name="comment" value={currentItem.comment} onChange={handleCurrentItemChange} />
                </label>
                <label>
                URL:
                <input type="text" name="link" value={currentItem.link} onChange={handleCurrentItemChange} />
                </label>

                <input type="button" value="+" onClick={addItem}/>
                <br></br>
                
                <input type="button" value="Create list" />
            </form>
        </Card>
            
    )
}
