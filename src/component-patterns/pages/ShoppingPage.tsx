import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'coffee',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title title={''} />
              <ProductCard.Buttons />
          </ProductCard>

          <ProductCard className="bg-dark" product={product}>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={'vaaasco'} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>

          <ProductCard style={{
            backgroundColor:"red"
          }} product={product}>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage
