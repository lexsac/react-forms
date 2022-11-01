import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
            backgroundColor: '',
            width: '',
            height: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    
    const handleChange = e => {  
        setFormData(data => ({
            ...data,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData, id: uuidv4() });
        setFormData({ height: "", width: "", backgroundColor: "" });
        }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color</label>
            <input 
                id="backgroundColor" 
                type="color" 
                name="backgroundColor"
                placeholder="Background Color" 
                value={formData.backgroundColor} 
                onChange={handleChange} 
            />
            <label htmlFor="width">Width</label>
            <input 
                id="width" 
                type="text" 
                name="width"
                placeholder="Width" 
                value={formData.width} 
                onChange={handleChange} 
            />
            <label htmlFor="height">Height</label>
            <input 
                id="height" 
                type="text" 
                name="height"
                placeholder="Height" 
                value={formData.height} 
                onChange={handleChange} 
            />
            <button>Create box!</button>
        </form>
    );
}

export default NewBoxForm;