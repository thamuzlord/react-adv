import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

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


          <ProductCard product={product}>
            <ProductImage />
            <ProductTitle title={'vaaasco'} />
            <ProductButtons />
          </ProductCard>
        </div>
    </div>
  )
}

export default ShoppingPage
