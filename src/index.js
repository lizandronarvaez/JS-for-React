// Formas de utilizar un operador ternario
const estudiar = true;
// Primera forma
let mensaje = ''
if (!estudiar) {
    console.log(mensaje = 'Estas estudiando ReactJS')
} else {
    console.log(mensaje = 'No estas estudiando ReactJS')
}
// Segunda forma
const response = (estudiar) ? 'Estoy estudiando' : 'No estoy estudiando'
// Tercera forma que solo evalue la primera condicion agregandole el operador AND &&
const respuesta = estudiar && 'Estas estudiando '

console.log(response)
console.log(respuesta)