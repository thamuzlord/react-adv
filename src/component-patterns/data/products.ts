import { Product } from "../interfaces/interfaces"

const product = {
    id: '1',
    title: 'coffee',
    img: './coffee-mug.png'
  }
  
  const product2 = {
    id: '2',
    title: 'coffee',
    img: './coffee-mug2.png'
  }
  
  export const products: Product[] = [product, product2]