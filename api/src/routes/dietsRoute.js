const { Router } = require('express'); 
const dietsHandler = require('../handlers/dietsHandler');

const dietsRoute = Router();

dietsRoute.get("/diets", dietsHandler);

module.exports = dietsRoute;