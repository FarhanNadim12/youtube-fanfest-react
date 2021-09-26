import React, { useEffect, useState } from 'react';
import Youtuber from '../Youtuber/Youtuber';
import Cart from '../Cart/Cart';
import './Display.css';

const Display = () => {
    const [youtubers, setYoutubers] = useState([]);
    const [carts, setCarts] = useState([]);
    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('./youtubers.json')
            .then(res => res.json())
            .then(data => setYoutubers(data))
    }, [])

    const handleButton = (youtuber) => {
        const newCount = [...carts, youtuber];

        setCarts(newCount);
        newCount.map(cart => {
            const newName = [...names, cart.name];
            return setNames(newName);
        });
    }

    let totalCost = 0;
    carts.forEach(cart => {
        const newCost = totalCost + parseInt(cart.salary);
        totalCost = newCost;
    });

    return (
        <div className="youtubersContainer">
            <div className="youtubers">
                {
                    youtubers.map(youtuber => <Youtuber key={youtuber.id} youtuber={youtuber} handleButton={handleButton}></Youtuber>)
                }
            </div>
            <div className="summary">
                <Cart carts={carts} cartsAdded={carts.length} totalCost={totalCost} names={names}  ></Cart>
            </div>
        </div>
    );
};

export default Display;