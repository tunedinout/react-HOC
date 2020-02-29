
import React from 'react';
import Item from './item';

function ItemList(props) {
    return (
        <div className="item-list">
            <ul>
                {
                    props.data.map((item) => {
                        return <Item value={item} />
                    })
                }
            </ul>
        </div>

    )
}

export default ItemList;