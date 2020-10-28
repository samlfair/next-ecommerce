import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'
import resolver from '../sm-resolver.js'
import { Layout } from '../components/Layout'
import ProductHeader from '../components/ProductDetail'

const Product = (props) => (
  <>
    <Layout config={props.config}>
      <ProductHeader product={props.data} />
      <SliceZone {...props} resolver={resolver} />
    </Layout>
  </>
)

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid,
  type: 'product'
})

/*

- site logo
- site title
- menu
  - link
  - text
- footer
  - rich text
- 

*/

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'product',
  fallback: true, // process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid } })
})

export default Product
