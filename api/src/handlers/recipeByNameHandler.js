const recipeByNameController = require('../controllers/recipeByNameController');

const recipeByNameHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const response = await recipeByNameController(name);
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = recipeByNameHandler;