import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'

const Product = (props) => (
  <>
    {console.log('props', props)}
    <h1>{props.data.name}</h1>
    <SliceZone {...props} resolver={resolver} />
    <code>{JSON.stringify(props.data.thumbnail_image.small_banner.url)}</code>
    <p></p>
    <img src={props.data.thumbnail_image.small_banner.url} />
    <img src={props.data.product.image_url_rect} />
    <img src={props.data.product.image_url_square} />
  </>
)

/*
For statically-generated Next.js projects, getStaticPaths() determines all of the pages
that must be generated for a given page type, and getStaticProps() gets the data for
those pages. With next-slicezone, we've made it easy to get your data from Prismic
by adding useGetStaticPaths() and useGetStaticProps().
*/

/*
getStaticProps() runs at build time to render the page with the data returned. 
useGetStaticProps() builds on getStaticProps(), adding Prismic API querying. You 
can get your data by passing a few options to useGetStaticProps():
- queryType: 'single' or 'repeatable' (defaults to 'repeatable')
- client: Client(), the api configuration, as imported from '~/prismic.js'
- type: document type (defaults to 'page')
- uid: document uid
- lang: document language, if empty API will return primary language
- body: the key where your slices array is stored (defaults to 'body')
- params: query options, such as fetchLinks (don't confuse with url params)

useGetStaticProps() can perform two types of queries:
- Get by UID
- Get singleton

Get by UID requires:
- client
- uid
- type (unless 'page')

Get singleton requires:
- client
- queryType
- type (unless 'page')

Note: for a dynamic URL, you must pass an anonymous function to the uid, which takes
the params object as an argument and returns params.uid. When Next calls getStaticProps, 
it will pass the params as an argument to getStaticProps, and useGetStaticProps will 
pass it on to the uid function. If you try to access params directly, it will be 
undefined.

*/

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid,
  type: 'product'
})

/*
getStaticPaths() is the Nextjs lifecycle hook for generating page paths in
SSG apps. It is only necessary for dynamic paths, like [uid], because otherwise
there is only one path. useGetStaticPaths() queries the Prismic API to
determine what paths to generate. It necessarily queries repeatable types.

useGetStaticPaths() takes six options:
- type: document type (defaults to 'page')
- formatPath: function to format Next path argument	(see Next.js docs for more info)
- fallback: boolean (defaults to false; see Next.js docs on fallbacks)
- params: query options, such as fetchLinks (don't confuse with url params)
- lang: document language, if empty API will return primary language
- client: Client(), the api configuration, as imported from '~/prismic.js'

The required fields are:
- client
- type (unless 'page')
- formatPath

*/

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'product',
  fallback: true, // process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid } })
})

export default Product
