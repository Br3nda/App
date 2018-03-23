import Layouts from '../components/Layouts'
import Head from 'next/head'
import firebase from '../firebase'

console.log('firebase name is ', firebase.name)
const messaging = firebase.messaging()
messaging.requestPermission()
.then(function () {
  console.log('Have permission')
})
.catch(function (err) {
  console.log('Error happened')
})

const Index = () => (
  <div>
    <Head><link rel='manifest' href='static/manifest.json' /> </Head>
    <Layouts>
      <p>Welcome to our awesome app</p>
    </Layouts>
  </div>
)

export default Index
