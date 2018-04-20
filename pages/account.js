import Layout from '../components/genApp/Layouts'
import Account from '../components/profile/account/Account'
import Menu from '../components/genApp/Menu'
const seed = require('../db/seed.json')
import db from '../db/rooms'

class account extends React.Component {
  static async getInitialProps() {
    const exampleData = db.reformatData(seed)
    const roomsData = exampleData
    console.log('Roomdata,',roomsData);
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layout>
          <Menu roomsData={this.props.roomsData}/>
          <Account />
        </Layout>
      </div>
    )
  }
}

export default account
