require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Recipe, Diet } = require('../db');

const getRecipeById = async (idRecipe) => {

    if (idRecipe.includes("-")) {
        const recipe = await Recipe.findOne({
            where: {
                id: idRecipe
            },
            include: {
                model: Diet,
                attributes: ["name"],
                through: {
                    attributes: []
                }
            }
        });
        return recipe;
    }
    else {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${idRecipe}/information?includeNutrition=false&apiKey=${API_KEY}`);
        if (response.data) {
            const data = response.data;
            const recipe = {
                id: data.id,
                name: data.title,
                image: data.image,
                diets: data.diets?.map(diet => diet),
                summary: data.summary,
                healthScore: data.healthScore,
                stepByStep: data.analyzedInstructions[0]?.steps?.map(step => step.step)
            };
            return recipe;
        };
    };
};

module.exports = getRecipeById;