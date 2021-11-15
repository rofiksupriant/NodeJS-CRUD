const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');

/* GET home page. */
router.get('/get_pokemons', pokemonController.getPokemons);
router.post('/create_pokemon', pokemonController.createPokemon);
router.delete('/delete_pokemon/:id', pokemonController.deletePokemon);
router.patch('/edit_pokemon/:id', pokemonController.editPokemon);

module.exports = router;
