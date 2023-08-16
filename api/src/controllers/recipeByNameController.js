require('dotenv').config();
const { Op } = require('sequelize');
const { Recipe } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;
const URL = "https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true";

const getRecipeByName = async (name) => {

    const recipesFromDB = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        }
    });

    const response = await axios.get(`${URL}&query=${name}&apiKey=${API_KEY}`);
    const data = response.data.results;
    const recipesFromApi = data.map(rec => {
        let recipe = {
            id: rec.id,
            name: rec.title,
            image: rec.image,
            diets: rec.diets?.map(diet => diet),
            summary: rec.summary,
            healthScore: rec.healthScore,
            stepByStep: rec.analyzedInstructions[0]?.steps?.map(step => step.step)
        }
        return recipe;
    });
    let allRecipesByName = [...recipesFromDB, ...recipesFromApi];
    if (allRecipesByName.length > 0) {
        return allRecipesByName;
    }
    else {
        throw new Error ('No hay recetas con ese nombre');
    };
}

module.exports = getRecipeByName;