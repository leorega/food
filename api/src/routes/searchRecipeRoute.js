const { Router } = require('express'); 
const recipeByNameHandler = require('../handlers/recipeByNameHandler');

const searchRecipeRoute = Router();

searchRecipeRoute.get("/name", recipeByNameHandler);

module.exports = searchRecipeRoute;