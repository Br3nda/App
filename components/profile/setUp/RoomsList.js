const RoomsList = () => (
  <div className='content'>
    <div className='center'>
      <h1 className='sm narrow-down-only'>Whare & Rooms</h1>
      <section classNameName='card'>
        <header classNameName='condensed'>
          <h2>Lisefski House</h2>
          <h4>Owner Occupier</h4>
          <a classNameName='head-action open-modal' href='#' data-mfp-src='#edit-whare'><img classNameName='svg' src='./img/icon/edit.svg' alt='edit' /></a>
        </header>
        <table classNameName='mob-break'>
          <tbody>
            <tr>
              <td>
                <h3>Room Name</h3>
                <h5>Room Type</h5>
              </td>
              <td>
                <div classNameName='sensor-group'>
                  <span classNameName='sensor'>146</span>
                  <dl>
                    <dt>Last reading</dt>
                    <dd>5 minutes ago</dd>
                  </dl>
                </div>
              </td>
              <td classNameName='actions'>
                <a classNameName='btn open-modal' href='#' data-mfp-src='#edit-room'><img classNameName='svg' src='./img/icon/edit.svg' alt='icon' />Edit</a>
              </td>
            </tr>
            <tr classNameName='spacer'><td colspan='100'></td></tr>
            <tr>
              <td>
                <h3>Room Name</h3>
                <h5>Room Type</h5>
              </td>
              <td>
                <div classNameName='sensor-group'>
                  <span classNameName='sensor'>146</span>
                  <dl>
                    <dt>Last reading</dt>
                    <dd>5 minutes ago</dd>
                  </dl>
                </div>
              </td>
              <td classNameName='actions'>
                <a classNameName='btn' href='#'><img classNameName='svg' src='./img/icon/edit.svg' alt='icon' />Edit</a>
              </td>
            </tr>
            <tr classNameName='spacer'><td colspan='100'></td></tr>
            <tr>
              <td>
                <h3>Room Name</h3>
                <h5>Room Type</h5>
              </td>
              <td>
                <div classNameName='sensor-group'>
                  <span classNameName='sensor'>146</span>
                  <dl>
                    <dt>Last reading</dt>
                    <dd>5 minutes ago</dd>
                  </dl>
                </div>
              </td>
              <td classNameName='actions'>
                <a classNameName='btn' href='#'><img classNameName='svg' src='./img/icon/edit.svg' alt='icon' />Edit</a>
              </td>
            </tr>
            <tr classNameName='spacer'><td colspan='100'></td></tr>
          </tbody>
        </table>
        <a classNameName='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img classNameName='svg' src='./img/icon/btn-add.svg' alt='icon' />Add room</a>
      </section>
    </div>
  </div>
)

export default RoomsList
