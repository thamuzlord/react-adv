import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'
import { useShoppingCart } from "../hooks/useShoppingCart"


export const ShoppingPage = () => {

  const {products, shoppingCart, onProductCountChange} = useShoppingCart()  

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>

        {
          products.map((product) => (
            <ProductCard 
              onChange={onProductCountChange} 
              value={shoppingCart[product.id]?.count || 0} 
              className="bg-dark" product={product} key={product.id}>
              <ProductImage img={product.img} className="custom-image" />
              <ProductTitle className="text-white" title={'vaaasco'} />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>

      <div className="shopping-cart">
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard className="bg-dark" product={product} key={key}
              style={{ width: '100px' }} 
              onChange={onProductCountChange} 
              value={product.count}>
              <ProductImage img={product.img} className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))
        }
      </div>
    </div>
  )
}

export default ShoppingPage 
