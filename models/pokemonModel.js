const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    national_number: {
        type: String
    },
    name: {
        type: String
    },
    type: {
        type: Array
    }
});

const Pokemon = mongoose.model('Pokemon', pokemonSchema)
module.exports = Pokemon