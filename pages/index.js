import Layouts from '../components/Layouts'
import Login from '../components/Login'
import Head from 'next/head'

const Index = (props) => (
  <div>
    <Head>
      <link rel='manifest' href='static/manifest.json' />
    </Head>
    <Layouts>
      <Login />
    </Layouts>
  </div>
)

export default Index
