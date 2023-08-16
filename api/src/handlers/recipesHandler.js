const recipesController = require('../controllers/recipesController');

const recipesHandler = async (req, res) => {
    try {
        const response = await recipesController();
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = recipesHandler;