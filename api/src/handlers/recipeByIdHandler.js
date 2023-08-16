const recipeByIdController = require('../controllers/recipeByIdController');

const recipeByIdHandler = async (req, res) => {
    const { idRecipe } = req.params;
    try {
        const response = await recipeByIdController(idRecipe);
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(404).json({error: error.message});
    };
};

module.exports = recipeByIdHandler;