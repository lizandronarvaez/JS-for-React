// Arrays a declarar
const arreglo1 = [1, 2, 3, 4, 5]
const arreglo2 = [...arreglo1, 6]
const arreglo3 = arreglo2.map((item) => {
    if (item % 2 == 0) {
        return item * 2
    } else {
        return item * 1
    }
})
// Console.log
console.info(arreglo1)
console.info(arreglo2)
console.info(arreglo3)