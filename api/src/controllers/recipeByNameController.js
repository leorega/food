require('dotenv').config();
const { Op } = require('sequelize');
const { Recipe, Diet } = require('../db.js');
const axios = require('axios');
const { API_KEY } = process.env;
const URL = "https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true";

const getRecipeByName = async (name) => {

    const recipesFromDB = await Recipe.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`
            }
        },
        include: {
            model: Diet,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });

    const recipesFromDBFormatted = recipesFromDB.map(recipe => {
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
    let allRecipesByName = [...recipesFromDBFormatted, ...recipesFromApi];
    if (allRecipesByName.length > 0) {
        return allRecipesByName;
    }
    else {
        throw new Error ('No hay recetas con ese nombre');
    };
}

module.exports = getRecipeByName;