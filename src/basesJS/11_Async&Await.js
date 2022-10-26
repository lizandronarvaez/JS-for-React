// Otra forma de resolver promesas es aplicar asycn await
// Async es una forma de resolver y await cumple la promesa
// Para intentar una promesa y resolverla se utiliza try y para cachear algun error catch
const getPokemonsById = async (id) => {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`
        const pokemon = await fetch(url)
        if (pokemon.status === 200) {
            const response = await pokemon.json()
            const { name, sprites } = response
            const { front_default } = sprites
            console.log(`Status ${pokemon.status} se revolvio correctamente la peticion`)
            const imagen = document.createElement('img')
            imagen.src = front_default
            document.body.append(imagen)
            const namePokemon = document.createElement('p')
            namePokemon.innerHTML = name
            document.body.append(namePokemon)
            document.body.style.textAlign = 'center'
        } else if (pokemon.status === 404) {
            throw Error
        }

    } catch (error) {
        console.log('Error al solicitar el pokemon')
    }



}
getPokemonsById('pikachu')