import React, { useState, useEffect } from 'react'
import './App.css';

function ItemDetail({ match }) {

    useEffect(() => {
        fetchItem();
    }, []); // eslint-disable-line

    const [item, setItem] = useState({
        images: {}
    })

    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortniteapi.io/v1/items/get?id=${match.params.id}`, {
            headers: {
                Authorization: "fc348f9f-c2c2336f-d062c9bf-a664f8ba"
            }
        });
        const item = await fetchItem.json();
        setItem(item.item)
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <img src={item.images.featured} alt={item.name}/>
        </div>
    );
}

export default ItemDetail;