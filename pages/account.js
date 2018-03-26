import Layouts from '../components/Layouts'
import Dashboard from '../components/Dashboard'
import Head from 'next/head'

const Account = () => (
  <div>
    <Head>
      <link rel='manifest' href ='static/manifest.json' />
    </Head>
    <Layouts>
      <Dashboard />
    </Layouts>
  </div>
)

export default Account
