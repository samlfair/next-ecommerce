import Head from 'next/head'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic'
import { Layout } from '../components/Layout'

export default function Home(props) {
  return (
    <Layout config={props.config}>
      <div>{/* <h1>{props.data.name}</h1> */}</div>
    </Layout>
  )
}

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: 'wood-plank',
  queryType: 'single',
  type: 'product'
})
