require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=`;
const { Recipe, Diet } = require('../db');

const getRecipes = async () => {

    const recipesDB = await Recipe.findAll({
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });

    const recipesFromDB = recipesDB.map(recipe => {
        return {
            id: recipe.id,
            name: recipe.name,
            image: recipe.image,
            diets: recipe.Diets?.map(diet => diet.name), 
            summary: recipe.summary,
            healthScore: recipe.healthScore,
            stepByStep: recipe.stepByStep
        };
    });

    const response = await axios.get(`${URL}${API_KEY}`);
    if (response.data.results && response.data.results.length > 0) {
        const recipes = response.data.results.map(rec => {
            let recipe = {
                id: rec.id,
                name: rec.title,
                image: rec.image,
                summary: rec.summary,
                diets: rec.diets,
                healthScore: rec.healthScore,
                stepByStep: rec.analyzedInstructions[0]?.steps?.map(step => step.step)
            };
            return recipe;
        });

        const allRecipes = [...recipesFromDB, ...recipes];
        return allRecipes;
    }  
    else {
        throw new Error ('No hay recetas');
    };
};

module.exports = getRecipes;