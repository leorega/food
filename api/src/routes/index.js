const { Router } = require('express');
const recipesRoute = require('./recipesRoute.js');
const recipeDetailRoute = require('./recipeDetailRoute.js');
const searchRecipeRoute = require('./searchRecipeRoute.js');
const createRecipeRoute = require('./createRecipeRoute.js');
const dietsRoute = require('./dietsRoute.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/recipes', searchRecipeRoute);
router.use('/recipes', recipeDetailRoute);
router.use('/recipes', recipesRoute);
router.use('/recipes', createRecipeRoute);
router.use('/diets', dietsRoute);
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
