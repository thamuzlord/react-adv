import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products"
import '../styles/custom-styles.css'

const product = products[0]


export const ShoppingPage = () => { 

  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

            <ProductCard 
              className="bg-dark" 
              product={product} 
              key={product.id}
              initialValues={{
                count: 4,
                maxCount: 10
              }}
              >
                {
                  ({reset, isMaxCountReached, maxCount, increaseBy, count}) => (
                    <>
                      <ProductImage img={product.img} className="custom-image" />
                      <ProductTitle className="text-white" title={'vaaasco'} />
                      <ProductButtons className="custom-buttons" />

                      <button onClick={reset}>Reset</button>
                      <button onClick={()=>increaseBy(-2)}>-2</button>
                      {
                        (!isMaxCountReached && <button onClick={()=>increaseBy(+2)}>+2</button>)
                      }

                      <span>{count} - {maxCount}</span>
                      
                    </>
                  )
                }
            </ProductCard>
      </div>

  )
}

export default ShoppingPage 
