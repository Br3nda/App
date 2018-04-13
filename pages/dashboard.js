// NOTE: service worker and registration commented out. To reinstate uncomment and move Dashboard component (commented out as well, under the export) into the return.

import Layouts from '../components/genApp/Layouts'
import Dashboard from '../components/profile/Dashboard'
const exampleData = require('../db/exampleData.json')

class dashboard extends React.Component {

  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts>
          <Dashboard roomsData={this.props.roomsData} />
        </Layouts>
      </div>
    )
  }
}

export default dashboard
// const roomsData = req ? req.headers['6'] : navigator.roomsData

// <Dashboard registration={this.state.registration} convertedVapidKey={this.state.convertedVapidKey} />
