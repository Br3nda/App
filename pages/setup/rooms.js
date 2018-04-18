import Layouts from '../../components/genApp/Layouts'
import Rooms from '../../components/profile/setUp/Rooms'
import Menu from '../../components/genApp/Menu'
const exampleData = require('../../db/exampleData.json')

class RoomProfile extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts>
        <Menu roomsData={this.props.roomsData} />
          <Rooms roomsData={this.props.roomsData} />
        </Layouts>
      </div>
    )
  }
}

export default RoomProfile
