// Tres tipos de declaracion de funciones
// Funcion declarativa
function saludame(nombre) {
    return `Hola ${nombre}`
}
// Funcion Expresiva
const saludame1 = (nombre) => { return `Hola ${nombre}` }
const saludame2 = (nombre) => `Hola ${nombre}`

// 
const getUser = () => ({ nombre: 'Lizandro', ciudad: 'Ciudad Real', pais: 'España' })

const data = getUser()
// Console.log
// console.log(saludame('Lizandro'))
// console.log(saludame1('Narvaez'))
// console.log(saludame2('Papi'))
// console.log(getUser())
// console.log(data)

// TAREA 
const getUsuario_EnLinea = (nombreUsuario) => ({
    uid: 'ABC1235DCF', username: nombreUsuario
})
// Instanciando alos usuarios
const usuarioActivo1 = getUsuario_EnLinea('Lizandro')
const usuarioActivo2 = getUsuario_EnLinea('Marina')
const usuarioActivo3 = getUsuario_EnLinea('Jean Carlos')
// Mostrando por pantalla a los usuarios
console.log(usuarioActivo1)
console.log(usuarioActivo2)
console.log(usuarioActivo3)