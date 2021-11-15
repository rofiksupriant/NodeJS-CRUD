const Pokemon = require('../models/pokemonModel');

exports.getPokemons = async (req,res) => {
    try {
        console.log(req.query.limit);
        const pokemons = await Pokemon.find().limit(req.query.limit*1);

        res.status(200);
        res.json({results: pokemons.length, data: pokemons});
    } catch (error) {
        console.log(error);
    }
}

exports.createPokemon = async (req, res) => {
    try {
        const { national_number, name, type } = req.body;

        if (!national_number || !name || !type) {
            res.status(200);
            res.json({message: 'All field must be filled'});
        }
        
        await Pokemon.create({ national_number, name, type });

        res.status(200);
        res.json({message: "Add Pokemon Successfull"});
        
    } catch (error) {
        res.status(500);
        res.json({error: error.message});
    }
}

exports.deletePokemon = async (req, res) => {
    try {
        await Pokemon.deleteOne({_id:req.params.id})
        res.status(200);
        res.json({message: "Delete Pokemon Successfull"});
    } catch (error) {
        res.status(500);
        res.json({error: error.message});
    }
}

exports.editPokemon = async (req, res) => {
    try {
        await Pokemon.findByIdAndUpdate(req.params.id, req.body)

        res.status(200);
        res.json({message: "Edit Pokemon Successfull"});

    } catch (error) {
        res.status(500);
        res.json({error: error.message});        
    }
}
