import React, { useState } from 'react';
import Box from './Box.js';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

function BoxList() {
    // const INITIAL_STATE = [
    //     { id: uuidv4(), backgroundColor: 'black', width: '200px', height: '200px'}, 
    //     { id: uuidv4(), backgroundColor: 'blue', width: '400px', height: '100px'},
    // ]
    const [boxes, setBoxes] = useState([]);
    const addBox = (newItem) => {
        setBoxes(boxes => [...boxes, {...newItem, id: uuidv4()}])
    }
    const remove = id => {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
      };

    return (
        <>
            <NewBoxForm addBox={addBox} />
            <div>
                {boxes.map(({id, backgroundColor, width, height }) => 
                    <Box 
                        id={id} 
                        backgroundColor={backgroundColor} 
                        width={width} 
                        height={height} 
                        handleRemove={remove}
                    />)}
            </div>
        </>
    );
}

export default BoxList;