const dietsController = require('../controllers/dietsController');

const dietsHandler = async (req, res) => {
    try {
        const response = await dietsController();
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = dietsHandler;