import Layouts from '../../components/genApp/Layouts'
import Rooms from '../../components/profile/setUp/Rooms'
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
          <Rooms roomsData={this.props.roomsData} />
        </Layouts>
      </div>
    )
  }
}

export default RoomProfile
