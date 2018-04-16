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
    console.log('this is rooms props', this.props)
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
// <Menu /> I have commented this out because it is throwing a bug in the console.
