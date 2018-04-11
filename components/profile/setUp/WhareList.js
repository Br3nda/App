const WhareList = () => (
  <div>
    <section className='card'>
      <header className='condensed'>
        <h2>Second Whare Name</h2>
        <h4>Whare Type</h4>
        <a className='head-action' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
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
              <a className='btn' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
            </td>
          </tr>
          <tr className='spacer'><td colspan='100'></td></tr>
        </tbody>
      </table>
      <a className='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add room</a>
    </section>
    <a className='btn-add append-card open-modal' href='#' data-mfp-src='#new-whare'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add whare</a>
  </div>
)

export default WhareList
