require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=`;

const getRecipes = async () => {

    const response = await axios.get(`${URL}${API_KEY}`);
    if (response.data.results && response.data.results.length > 0) {
        const recipes = response.data.results.map(rec => {
            let recipe = {
                id: rec.id,
                name: rec.title,
                image: rec.image,
                summary: rec.summary,
                healthScore: rec.healthScore,
                stepByStep: rec.analyzedInstructions[0]?.steps?.map(step => step.step)
            };
            return recipe;
        });
        return recipes;
    }  
    else {
        throw new Error ('No hay recetas');
    };
};

module.exports = getRecipes;