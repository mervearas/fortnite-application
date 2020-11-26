import React, { useState, useEffect } from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems()
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://fortniteapi.io/v1/items/upcoming?lang=en', {
            headers: {
                Authorization: "fc348f9f-c2c2336f-d062c9bf-a664f8ba"
            }
        });

        const items = await data.json();
        setItems(items.items)
    }

    console.log(items)


    return (
        <div>
            {items.map(item => (

                <h1 key={item.id}><Link to={`/shop/${item.id}`}>{item.name}</Link></h1>
            ))}
        </div>
    );
}

export default Shop;