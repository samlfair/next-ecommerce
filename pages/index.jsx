import Head from 'next/head'
import { useGetStaticProps } from 'next-slicezone/hooks'
import { Client } from '../prismic'
import { Layout } from '../components/Layout'

export default function Home(props) {
  return (
    <Layout>
      <div>
        <h1>{props.data.name}</h1>
      </div>
    </Layout>
  )
}

export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: 'wood-plank',
  queryType: 'single',
  type: 'product'
})

/*
var data = {
  product: {
    sku: 106,
    title: 'Wood Plank',
    description: 'A standard wood plank of American lumber.',
    image_url_rect: 'https://source.unsplash.com/uDT8nh0I-vk/900x600',
    image_url_square: 'https://source.unsplash.com/uDT8nh0I-vk/900x900',
    price: '1.99',
    rating: '2.7'
  },
  name: 'Wood Plank',
  thumbnail_image: {
    dimensions: { width: 4272, height: 2848 },
    alt: null,
    copyright: null,
    url:
      'https://images.prismic.io/sam-ecommerce-learning/fb6ca65e-3b79-49e3-a542-5784895db282_molly-blackwood-v4XeZkJjv_4-unsplash.jpg?auto=compress,format',
    fixed_height: {
      dimensions: { width: 900, height: 600 },
      alt: null,
      copyright: null,
      url:
        'https://images.prismic.io/sam-ecommerce-learning/fb6ca65e-3b79-49e3-a542-5784895db282_molly-blackwood-v4XeZkJjv_4-unsplash.jpg?auto=compress,format&rect=0,0,4272,2848&w=900&h=600'
    },
    banner: {
      dimensions: { width: 1200, height: 700 },
      alt: null,
      copyright: null,
      url:
        'https://images.prismic.io/sam-ecommerce-learning/fb6ca65e-3b79-49e3-a542-5784895db282_molly-blackwood-v4XeZkJjv_4-unsplash.jpg?auto=compress,format&rect=0,178,4272,2492&w=1200&h=700'
    },
    small_banner: {
      dimensions: { width: 600, height: 350 },
      alt: null,
      copyright: null,
      url:
        'https://images.prismic.io/sam-ecommerce-learning/fb6ca65e-3b79-49e3-a542-5784895db282_molly-blackwood-v4XeZkJjv_4-unsplash.jpg?auto=compress,format&rect=0,178,4272,2492&w=600&h=350'
    },
    fixed_width: {
      dimensions: { width: 700, height: 467 },
      alt: null,
      copyright: null,
      url:
        'https://images.prismic.io/sam-ecommerce-learning/fb6ca65e-3b79-49e3-a542-5784895db282_molly-blackwood-v4XeZkJjv_4-unsplash.jpg?auto=compress,format&rect=0,0,4269,2848&w=700&h=467'
    }
  },
  body: [
    {
      slice_type: 'text_block',
      slice_label: null,
      items: [{}],
      primary: {
        text: [{ type: 'paragraph', text: 'Text text text', spans: [] }]
      }
    }
  ]
}
*/
