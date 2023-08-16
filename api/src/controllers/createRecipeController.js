const { Recipe, Diet } = require('../db');

const createRecipeController = async (
    name, image, summary, healthScore, stepByStep, diets
) => {
    const newRecipe = await Recipe.create({
        name, image, summary, healthScore, stepByStep
    });
    diets.forEach(async (diet) => {
        let dietsDB = await Diet.findAll({where:{name: diet}});
        newRecipe.addDiets(dietsDB);
    });
    return newRecipe;
}

module.exports = createRecipeController;