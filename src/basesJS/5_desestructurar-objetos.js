const personaje = {
    nombreHeroe: 'Iron Man',
    numero_de_trajes: 3,
    traje: 'Armadura',
    nombreActor: 'Tony start',
}
// Estableciendo una funcion
const useContext = ({ nombreHeroe, traje, nombreActor }) => {
    return {
        nombre: nombreHeroe,
        tipo: traje,
        actor: nombreActor,
        adversarios: {
            primero: 'Hulk',
            segundo: 'Batman'
        }
    }
}

// Desestructurando
const { nombre, tipo, actor, adversarios } = useContext(personaje)
const { primero, segundo } = adversarios
// Informacion de la consola
console.log(`Hola soy ${nombre} mi traje es de ${tipo} y quien le da vida es ${actor}`)
console.log(`Sus adversarios son ${primero} y ${segundo}`)