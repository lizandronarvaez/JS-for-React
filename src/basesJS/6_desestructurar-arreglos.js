const heroes = ['Iron Man', 'Black Panter', 'Spiderman', 'Thor']

// Para acceder a un elemento de un desestructuracion de un array
const extraerHeroes = () => {
    return ['ABC', 123, { nombre: 'Lizandro Narvaez', profesion: 'Desarrollador Frontend' }]
}
// Se deja los espacios vacios y se añade el nombre al elemento que quieres acceder
// Aqui se extra los elementos que queremos acceder en un array
const [primeraPosicion, segundaPosicion, TerceraPosicion] = extraerHeroes()
const { nombre, profesion } = TerceraPosicion
console.log(primeraPosicion, segundaPosicion)
console.log(`Soy ${nombre} y soy un ${profesion}`)

// Tarea a realizar
const useState = (nombre) => {
    return [nombre, () => { console.log(`Hola soy ${nombre}`) }]
}

const [nombrePersonaje, setNombre] = useState('Iron Man');

console.log(nombrePersonaje)
setNombre()