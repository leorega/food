const { Router } = require('express'); 
const searchRecipeHandler = require('../handlers/recipeByNameHandler');

const searchRecipeRoute = Router();

searchRecipeRoute.get("/name", searchRecipeHandler);

module.exports = searchRecipeRoute;