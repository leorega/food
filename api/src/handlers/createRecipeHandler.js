const createRecipeController = require('../controllers/createRecipeController');

const createRecipeHandler = async (req, res) => {
    const { name, image, summary, healthScore, stepByStep, diets  } = req.body;
    try {
        const response = await createRecipeController(name, image, summary, healthScore, stepByStep, diets);
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = createRecipeHandler;