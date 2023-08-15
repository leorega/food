const recipesController = require('../controllers/recipesController');

const recipesHandler = async (req, res) => {
    try {
        const response = await recipesController();
        res.status(200).json(response);      
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

module.exports = recipesHandler;