// import AddRoomModal from './AddRoomModal'
import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'

const mapRooms = mapObjIndexed((room, key) => (
  <tbody>
    <tr>
      <td>
        <h3>{room.name}</h3>
        <h5>{room.roomUse}</h5>
      </td>
      <td>
        <div className='sensor-group'>
        <span className='sensor'>146</span>
          <dl>
            <dt>Last reading</dt>
            <dd>{room.temperature.timestamp}</dd>
          </dl>
        </div>
      </td>
      <td className='actions'>
        <a className='btn open-modal' href='#' data-mfp-src='#edit-room'><img className='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
      </td>
    </tr>
  </tbody>
))

const mapRoomsToValues = pipe(mapRooms, values)

const RoomsList = (props) => {

   return(
    <div>
      <h1 className='sm narrow-down-only'>Whare & Rooms</h1>
      <section className='card'>
        <header className='condensed'>
          <h2>Lisefski House</h2>
          <h4>Owner Occupier</h4>
          <a className='head-action open-modal' href='#' data-mfp-src='#edit-whare'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
        </header>
        <table className='mob-break'>
          {mapRoomsToValues(props.roomsData)}
        </table>
        <a className='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add room</a>
      </section>
    </div>
  )
}

export default RoomsList

// <AddRoomModal />
