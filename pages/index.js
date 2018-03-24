import Layouts from '../components/Layouts'
import Head from 'next/head'

const Index = () => (
  <div>
    <Head>
      <link rel='manifest' href='static/manifest.json' />
    </Head>
    <Layouts>
      <p>Welcome to our awesome app</p>
    </Layouts>
  </div>
)

export default Index
