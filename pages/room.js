import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Layouts from '../components/genApp/Layouts'
import Menu from '../components/genApp/Menu'
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
      <Menu roomsData={this.props.roomsData}/>
      <RoomDetail roomsData={this.props.roomsData} />
      </Layouts>
    </div>
  )
}
}

export default room

// <RoomDetail /> url={this.props.url}
