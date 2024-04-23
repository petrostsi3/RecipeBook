import React, { useState } from 'react';
import axios from 'axios';
 
const RecipeList = (props) => {
    const [activeRecipe, setActiveRecipe] = useState(null);
 
    const handleDelete = async (recipeId) => {
        try {
            await axios.delete(`http://localhost:8000/recipes/${recipeId}/`);
            props.refreshRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };
 
    const handleRecipeClick = (recipeId) => {
        if (activeRecipe === recipeId) {
            setActiveRecipe(null);
        } else {
            setActiveRecipe(recipeId);
        }
    };
 
    return (
        <div>
            <h2>All Recipes</h2>
            <ul>
                {props.recipes.map(recipe => (
                    <li key={recipe.id}>
                        <div>
                            <span
                                onClick={() => handleRecipeClick(recipe.id)}
                                className="recipe-name">
                                <b>{recipe.recipe_name}</b>
                            </span>
                            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                        </div>
                        {activeRecipe === recipe.id && (
                            <div>
                            <strong>Ingredients:</strong>
                            <p dangerouslySetInnerHTML={{ __html: recipe.ingredients}}></p>
                            <strong>Instructions:</strong>
                            <p dangerouslySetInnerHTML={{ __html: recipe.instructions}}></p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};
 
export default RecipeList;