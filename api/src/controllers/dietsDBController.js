const { Diet } = require('../db.js');

const dietsDBController = async () => {
    const dietsDB = await Diet.findAll();
    return dietsDB;
};

module.exports = dietsDBController;