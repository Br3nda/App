import Layouts from '../components/genApp/Layouts'
import RoomDetail from '../components/room/RoomDetail'
const exampleData = require('../db/exampleData.json')

class room extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

render () {
  return (
    <div>
      <Layouts>
       <RoomDetail roomsData={this.props.roomsData} url={this.props.url}/>
      </Layouts>
    </div>
  )
}
}

export default room
