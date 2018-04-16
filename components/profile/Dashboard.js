// NOTE: service worker and push manager commented out. To reinstate, uncomment and pull update button (currently commented out and below the export) back into return - but actually this is not where it is going to live anyway.
import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Menu from '../genApp/Menu'
import Header from '../genApp/Header'
import CardSummary from '../room/CardSummary'

const mapRooms = mapObjIndexed((room, key) => (
    <CardSummary room={room} />
))
const mapRoom = mapObjIndexed((room, key) => (
    <Menu room={room} />
))
const mapRoomsToValues = pipe(mapRooms, values)
const mapRoomToValues = pipe(mapRoom, values)

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <Header />
        <div className='overlay'></div>
          {mapRoomToValues(this.props.roomsData)}
        <div className='content'>
          <div className='center'>
            <h1>Lisefski House</h1>
            <div className='summary-grid'>
              {mapRoomsToValues(this.props.roomsData)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard

// {this.updateBtn()}
