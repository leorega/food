const recipeByIdController = require('../controllers/recipeByIdController');

const recipeByIdHandler = async (req, res) => {
    const { idRecipe } = req.params;
    try {
        const response = await recipeByIdController(idRecipe);
        res.status(200).json(response);      
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = recipeByIdHandler;