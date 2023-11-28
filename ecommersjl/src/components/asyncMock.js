const products = [
    {
        id: '1',
        name: 'Camiseta Chicago Bulls 2023',
        price: 500,
        category: 'Camisetas',
        img: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-nike-icon-swingman-jersey-alex-caruso-unisex_ss4_p-13367975+u-c0ej7ky8hzudxio33uun+v-03e0a73f58eb41b49854aff0b0f2876b.jpg?_hv=2&w=900',
        stock: 15,
        Description: 'Camiseta Titular Temporada 2023 Alex Caruso'
    },
    {
        id: '2',
        name: 'Pelota de Basketball Splanding',
        price: 50,
        category: 'Pelotas',
        img: 'https://basketworld.com/blog/wp-content/uploads/2019/07/NBA-GAME-BALL-OFFICIAL.jpg',
        stock: 20,
        Description: 'Pelota Oficial de la NBA'
    },
    {
        id: '3',
        name: 'FunKoPop Jimmy Butler',
        price: 250,
        category: 'FunkoPops',
        img: 'https://rec-line.com/img/productos/467x467/889698576260.jpeg',
        stock: 10,
        Description: 'FunkoPop de Jimmy Butrler en Miami 15x10cm'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(products) }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))},500)
    })
}
export const getProductsByCategory = (category) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === category))},500)
  })
}