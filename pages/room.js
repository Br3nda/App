import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Layouts from '../components/genApp/Layouts'
import RoomDetail from '../components/room/RoomDetail'
const exampleData = require('../db/exampleData.json')

const mapDetails = mapObjIndexed((room, key) => (
    <RoomDetail room={room} />
))

const mapDetailsToValues = pipe(mapDetails, values)

class room extends React.Component {
  static async getInitialProps() {
    const detailData = exampleData
    return { detailData }
}

render () {
  return (
    <div>
      <Layouts>
      {mapDetailsToValues(this.props.detailData)}
      </Layouts>
    </div>
  )
}
}

export default room
// <RoomDetail detailData={this.props.detailData} url={this.props.url}/>
