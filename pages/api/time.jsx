async function time (req, res) {
    const apiSecret = process.env.POKE_API;
    const dynamicDate = new Date();

    const pokeAPI = await fetch(`${apiSecret}`);
    const pokeApiJSON = await pokeAPI.json();
    const totalPokemon = pokeApiJSON.count;

    res.json({
        date: dynamicDate.toGMTString(),
        pokemons: totalPokemon
    })
}

export default time;
