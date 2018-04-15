import Layouts from '../components/genApp/Layouts'
import RoomDetail from '../components/room/RoomDetail'
const exampleData = require('../db/exampleData.json')

class room extends React.Component {
  static async getInitialProps() {
    const roomData = exampleData
    return { roomData }
}

render () {
  return (
    <div>
      <Layouts>
        <RoomDetail roomData={this.props.roomData} />
      </Layouts>
    </div>
  )
}
}

export default room
