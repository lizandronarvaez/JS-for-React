import heroes from "../data/heroes";
// Con el metodo find() se va a realizar la busqueda de un solo objeto y te devolvera true con el objecto encontrado

const getHeroeByID = (id) => heroes.find((heroe) => heroe.id == id)

// console.log(getHeroeByID(2))
// Con el metodo filter() si es true, va a realizar la busqueda y devolver un resultado con los objetos que se llamen o contengan el mismo valor

const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner.toLowerCase() === owner.toLowerCase())

// console.log(getHeroeByOwner('marvel'))

export {
    getHeroeByID,
    getHeroeByOwner
}