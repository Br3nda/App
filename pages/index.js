import fetch from 'isomorphic-unfetch'
import Layouts from '../components/genApp/Layouts'
import Login from '../components/genApp/Login'
import Head from 'next/head'
const seed = require('../db/seed.json')
import db from '../db/rooms'

class Index extends React.Component {

  static async getInitialProps() {
    // const res = await fetch('https://app.wharehauora.nz/api/v1/homes/7/rooms')
    // const data = await res.json()
    const exampleData = db.reformatData(seed)
    const roomsData = exampleData
    console.log('Roomdata,',roomsData);
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts >
          <Login />
        </Layouts>
      </div>
    )
  }
}
export default Index
