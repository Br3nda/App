import Layouts from '../components/Layouts'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <link rel='manifest' href ='static/manifest.json' />
    </Head>
    <Layouts />
  </div>
)

export default Index
