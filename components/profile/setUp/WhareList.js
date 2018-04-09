const WhareList = () => (
  <div>
    <section class='card'>
      <header class='condensed'>
        <h2>Second Whare Name</h2>
        <h4>Whare Type</h4>
        <a class='head-action' href='#'><img class='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
      </header>
      <table class='mob-break'>
        <tbody>
          <tr>
            <td>
              <h3>Room Name</h3>
              <h5>Room Type</h5>
            </td>
            <td>
              <div class='sensor-group'>
                <span class='sensor'>146</span>
                <dl>
                  <dt>Last reading</dt>
                  <dd>5 minutes ago</dd>
                </dl>
              </div>
            </td>
            <td class='actions'>
              <a class='btn' href='#'><img class='svg' src='../../../static/img/icon/edit.svg' alt='icon' />Edit</a>
            </td>
          </tr>
          <tr class='spacer'><td colspan='100'></td></tr>
        </tbody>
      </table>
      <a class='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img class='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add room</a>
    </section>
    <a class='btn-add append-card open-modal' href='#' data-mfp-src='#new-whare'><img class='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add whare</a>
  </div>
)

export default WhareList
