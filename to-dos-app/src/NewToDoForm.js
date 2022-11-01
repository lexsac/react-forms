import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewToDoForm({ addToDo }) {
    const INITIAL_STATE = {toDo: ''}

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {  
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addToDo({ ...formData, id: uuidv4() });
        setFormData({ toDo: '' });
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="toDo">To Do</label>
            <input 
                id="toDo"
                type="text"
                name="toDo"
                placeholder="To Do"
                value={formData.toDo}
                onChange={handleChange}
            />
            <button>Create To Do!</button>
        </form>
    );
}

export default NewToDoForm;