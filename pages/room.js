import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Layouts from '../components/genApp/Layouts'
import Menu from '../components/genApp/Menu'
import RoomDetail from '../components/room/RoomDetail'

const seed = require('../db/seed.json')
import db from '../db/rooms'

class room extends React.Component {
  static async getInitialProps() {
    const exampleData = db.reformatData(seed)
    const roomsData = exampleData
    console.log('Roomdata,',roomsData);
    return { roomsData }
}


render () {
  return (
    <div>
      <Layouts>
      <Menu roomsData={this.props.roomsData}/>
      <RoomDetail room={this.props.roomsData[this.props.url.query.id]} />
      </Layouts>
    </div>
  )
}
}

export default room

// <RoomDetail /> url={this.props.url}
