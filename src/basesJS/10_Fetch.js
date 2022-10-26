const findPokemonId = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`
    //Haciendo una peticion fetch 
    const pokemon = fetch(url)
        .then(res => res.json())
        .then(({ id, pokemon, sprites }) => {
            const { name } = pokemon
            const { front_default } = sprites
            // Mostrar imagen por pantalla
            const img = document.createElement('img')
            img.src = front_default
            img.style.width = '200px'
            document.body.append(img)
            // Mostar nombre del pokemon
            const namePokemon = document.createElement('p')
            namePokemon.textContent = name
            document.body.append(namePokemon)
            document.body.style.textAlign = 'center'
            document.body.style.fontSize = '50px'
        })
    return pokemon
}
// CallBack ala funcion que nos retornara un resultado segun el id introducido 
findPokemonId(5)
    .then(console.log)
    .catch(console.warn)