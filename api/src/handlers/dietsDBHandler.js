const dietsDBController = require('../controllers/dietsDBController');

const dietsDBHandler = async (req, res) => {
    try {
        const response = await dietsDBController();
        return res.status(200).json(response);      
    } catch (error) {
        return res.status(400).json({error: error.message});
    };
};

module.exports = dietsDBHandler;