import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Header from '../../genApp/Header'
import Menu from '../../genApp/Menu'
import RoomsList from './RoomsList'
import WhareList from './WhareList'

const mapRooms = mapObjIndexed((room, key) => (
    <RoomsList room={room} />
))

const mapRoomsToValues = pipe(mapRooms, values)

class Rooms extends React.Component {

  render () {
    return (
      <div className='content'>
        <div className='center'>
          <Header />
          {mapRoomsToValues(this.props.roomsData)}
          <WhareList />
        </div>
      </div>
    )
  }
}

export default Rooms
// <Menu />
