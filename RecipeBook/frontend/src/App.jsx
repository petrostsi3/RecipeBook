import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import RecipeList from './components/RecipeList';  
import AddRecipe from './components/AddRecipe';    
 
function App() {
    const [recipes, setRecipes] = useState([]);
 
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/recipes/');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    }; 
 
    useEffect(() => {
        fetchRecipes();
    }, []);
 
    return (
        <div className="App">
            <header className="App-header">
                <h1>Recipe Book</h1>
                <AddRecipe refreshRecipes={fetchRecipes} />
                <RecipeList recipes={recipes} refreshRecipes={fetchRecipes} />
            </header>
        </div>
    );
}
 
export default App;
 