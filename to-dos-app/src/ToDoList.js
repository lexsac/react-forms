import React, { useState } from 'react';
import NewToDoForm from './NewToDoForm.js';
import ToDo from './ToDo.js';
import { v4 as uuidv4 } from 'uuid';

function ToDoList() {
    const [toDos, setToDos] = useState([]);
    const addToDo = (newToDo) => {
        setToDos(toDos => [...toDos, {...newToDo, id: uuidv4()}]);
    }
    const remove = id => {
        setToDos(toDos => toDos.filter(toDo => toDo.id !== id));
    }

    return (
        <>
            <NewToDoForm addToDo={addToDo}/>
            <div>
                {toDos.map(({ id, toDo }) => 
                    <ToDo
                        id={id} 
                        toDo={toDo}
                        handleRemove={remove}
                    />)}
            </div>
        </>
    );
}

export default ToDoList;