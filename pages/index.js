import Layouts from '../components/genApp/Layouts'
import Login from '../components/genApp/Login'
import Head from 'next/head'
const exampleData = require('../db/exampleData.json')

class Index extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts>
          <Login />
        </Layouts>
      </div>
    )
  }
}
export default Index
