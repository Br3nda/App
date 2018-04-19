// NOTE: service worker and push manager commented out. To reinstate, uncomment and pull update button (currently commented out and below the export) back into return - but actually this is not where it is going to live anyway.
import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Header from '../genApp/Header'
import CardSummary from '../room/CardSummary'

const mapRooms = mapObjIndexed((room, key) => (
    <CardSummary room={room} key={key}/>
))
const mapRoomsToValues = pipe(mapRooms, values)

class Dashboard extends React.Component {

  render () {
    return (
      <div>
        <div className='overlay'></div>
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
