// import AddRoomModal from './AddRoomModal'

const RoomsList = () => (
  <div>
    <h1 className='sm narrow-down-only'>Whare & Rooms</h1>
    <section className='card'>
      <header className='condensed'>
        <h2>Lisefski House</h2>
        <h4>Owner Occupier</h4>
        <a className='head-action open-modal' href='#' data-mfp-src='#edit-whare'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
      </header>
      <table className='mob-break'>
        <tbody>
          <tr>
            <td>
              <h3>Room Name</h3>
              <h5>Room Type</h5>
            </td>
            <td>
              <div className='sensor-group'>
                <span className='sensor'>146</span>
                <dl>
                  <dt>Last reading</dt>
                  <dd>5 minutes ago</dd>
                </dl>
              </div>
            </td>
            <td className='actions'>
              <a className='btn open-modal' href='#' data-mfp-src='#edit-room'><img className='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
            </td>
          </tr>
          <tr className='spacer'><td colspan='100'></td></tr>
          <tr>
            <td>
              <h3>Room Name</h3>
              <h5>Room Type</h5>
            </td>
            <td>
              <div className='sensor-group'>
                <span className='sensor'>146</span>
                <dl>
                  <dt>Last reading</dt>
                  <dd>5 minutes ago</dd>
                </dl>
              </div>
            </td>
            <td className='actions'>
              <a className='btn' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
            </td>
          </tr>
          <tr className='spacer'><td colspan='100'></td></tr>
          <tr>
            <td>
              <h3>Room Name</h3>
              <h5>Room Type</h5>
            </td>
            <td>
              <div className='sensor-group'>
                <span className='sensor'>146</span>
                <dl>
                  <dt>Last reading</dt>
                  <dd>5 minutes ago</dd>
                </dl>
              </div>
            </td>
            <td className='actions'>
              <a className='btn' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
            </td>
          </tr>
          <tr className='spacer'><td colspan='100'></td></tr>
        </tbody>
      </table>
      <a className='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add room</a>
    </section>
  </div>
)

export default RoomsList

// <AddRoomModal />
