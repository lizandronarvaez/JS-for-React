const URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'
const personajes = fetch(URL)
personajes.then(resolve => { return resolve.json() })
    .then((data) => {
        const datos=data
        const personaje1=datos[0]
        console.table(personaje1)
        const personaje2={...personaje1}
        personaje2.name='Lizandro'
        personaje2.firstName='Narvaez'
        personaje2.lastName='Moran'
        personaje2.email='lizandrojesus13@hotmail.com'
        personaje2.id=2
        personaje2.postId=2
        console.table(personaje2)
    })