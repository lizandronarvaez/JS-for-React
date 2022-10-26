import { getHeroeByID } from "./basesJS/7_Importacion-Export";
// Ejecutando una nueva promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroeByID(6)
        console.log(heroe)
        // Resolver va a resolver la promesa devolviendo los datos en formato json
        resolve(heroe)
        // En caso de error hay que hacer un callback a reject
        reject('Ha ocurrido un error al encontrar al heroe')
    }, 2000)
})
// Aqui se manejan las promesas mediante then y catch, si revuelve o si existe un error
// Si la promesa se cumple se ejecutara con un then
promesa.then((heroe) => {
    console.log(`El personaje que haz buscado por su id es ${heroe.name}`)

    // Si la promesa no se cumple por que existe algun error e ejectura catch
}).catch((error) => {
    console.log(error)
})

// OTRA FORMA DE RESOLVER UNA PROMESA
// Segun el id me devolvera su nombre
const getHeroeById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const findHeroeId = getHeroeByID(id)
            // Resolver va a resolver la promesa devolviendo los datos en formato json
            // Si el heroe existe, se resolvera la promesa
            findHeroeId ? resolve(getHeroeByID(id))
                // En caso de error hay que hacer un callback a reject
                // Si el heroe no existe
                : reject('Ha ocurrido un error al encontrar al heroe')
        }, 1000)
    })

}
// Callback ala funcion pasandole un id
getHeroeById(3)
    .then(console.info)
    .catch(console.warn)

// Ejemplo de realizar una promesa
const findPokemonId = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-form/${id}/`
    return new Promise((resolve, reject) => {
        if (url) {
            resolve(url)
        } else {
            reject('Ha ocurrido un error al encontrar el pokemon')
        }
    })

}
// llamando ala promesa
findPokemonId(1)
    .then(console.log)
    .catch(console.warn)
