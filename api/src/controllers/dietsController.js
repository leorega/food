require('dotenv').config();
const { Diet } = require('../db');
const axios = require('axios');
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=100&apiKey=`;

const dietsController = async () => {
    
    const response = await axios.get(`${URL}${API_KEY}`);
    let dietsApi = [];
    response.data.results.map(recipe => dietsApi.push(recipe.diets));
    let unrepeatDiets = new Set(dietsApi.flat());
    let unrepeatDietsArray = [...unrepeatDiets];
    unrepeatDietsArray.forEach(async (diet) => {
        await Diet.findOrCreate({
            where: {
                name: diet
            }
        });
    });
    console.log("Dietas cargadas en la DB");
};

module.exports = { dietsController };
