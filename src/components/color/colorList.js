import React from 'react';
import Color from './color'

function ColorList(props) {
    return (
        <div className="color-container">
            {props.data.map(
                (color) => { return <Color value={color} /> }
            )
            }

        </div>
    )
}
export default ColorList;