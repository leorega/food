const { Router } = require('express'); 
const dietsDBHandler = require('../handlers/dietsDBHandler');

const dietsDBRoute = Router();

dietsDBRoute.get("/", dietsDBHandler);

module.exports = dietsDBRoute;