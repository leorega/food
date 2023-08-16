const { Router } = require('express'); 
const dietsHandler = require('../handlers/dietsHandler');

const dietsRoute = Router();

dietsRoute.get("/", dietsHandler);

module.exports = dietsRoute;