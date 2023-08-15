const { Router } = require('express'); 
const createRecipeHandler = require('../handlers/createRecipeHandler');

const createRecipeRoute = Router();

createRecipeRoute.post("/", createRecipeHandler);

module.exports = createRecipeRoute;