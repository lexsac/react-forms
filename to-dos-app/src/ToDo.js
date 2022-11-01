import React from 'react';

function ToDo({ id, toDo, handleRemove }) {
    const remove = () => handleRemove(id);
    return (
        <div>
            <div>{toDo}</div>
            <button onClick={remove}>X</button>
         </div>

    );
}

export default ToDo;