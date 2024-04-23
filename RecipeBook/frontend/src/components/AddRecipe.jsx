import React, { useState } from 'react';
import axios from 'axios';
 
const AddRecipe = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/recipes/', {
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions
            });
            setRecipeName('');
            setIngredients('');
            setInstructions('');
            props.refreshRecipes();
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };
 
    return (
        <div>
            <h2>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Recipe Name:</label>
                    <input type='text' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />
                </div>
                <div>
                    <label>Ingredients:</label>
                    <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Instructions:</label>
                    <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                </div>
                <button type='submit' className='addRecipe'>Add Recipe</button>
            </form>
        </div>
    );
};
 
export default AddRecipe;