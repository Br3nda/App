import Layouts from '../components/genApp/Layouts'
import Login from '../components/genApp/Login'
import Head from 'next/head'

const Index = (props) => (
  <div>
    <Head>
      <link rel='manifest' href='static/manifest.json' />
      <meta name='mobile-web-app-capable' content='yes' key='viewport' />
      <meta name='apple-mobile-web-app-capable' content='yes' key='viewport' />
      <meta name='msapplication-starturl' content='/' key='viewport' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
    </Head>
    <Layouts>
      <Login />
    </Layouts>
  </div>
)

export default Index
