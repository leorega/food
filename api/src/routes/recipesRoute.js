const { Router } = require('express'); 
const recipesHandler = require('../handlers/recipesHandler');

const recipesRoute = Router();

recipesRoute.get("/", recipesHandler);

module.exports = recipesRoute;