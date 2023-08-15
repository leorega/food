const { Router } = require('express'); 
const recipeDetailHandler = require('../handlers/recipeByIdHandler')

const recipeDetailRoute = Router();

recipeDetailRoute.get("/:idRecipe", recipeDetailHandler);

module.exports = recipeDetailRoute;