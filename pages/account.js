import Layout from '../components/genApp/Layouts'
import Account from '../components/profile/account/Account'
import Menu from '../components/genApp/Menu'
const exampleData = require('../db/exampleData.json')

class account extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layout>
          <Menu  roomsData={this.props.roomsData}/>
          <Account />
        </Layout>
      </div>
    )
  }
}

export default account
