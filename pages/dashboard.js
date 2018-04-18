// NOTE: service worker and registration commented out. To reinstate uncomment and move Dashboard component (commented out as well, under the export) into the return.

import Layouts from '../components/genApp/Layouts'
import Dashboard from '../components/profile/Dashboard'
import Menu from '../components/genApp/Menu'
const exampleData = require('../db/exampleData.json')
import Link from 'next/link'
import Header from '../components/genApp/Header'
// import Menu from '../components/genApp/Menu'

class dashboard extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts>
          <Header />
          <Menu roomsData={this.props.roomsData}/>
          <Dashboard roomsData={this.props.roomsData} />
        </Layouts>
      </div>
    )
  }
}

export default dashboard
// const roomsData = req ? req.headers['6'] : navigator.roomsData

// <Dashboard registration={this.state.registration} convertedVapidKey={this.state.convertedVapidKey} />
