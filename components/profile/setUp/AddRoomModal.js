import ReactModal from 'react-modal'

class AddRoomModal extends React.Component {

  render () {
    return(
      <div id='new-room' class='modal mfp-hide'>
        <header>
          <h2>New Room</h2>
          <a class='head-action close' href='#'><img class='svg' src='./img/icon/x.svg' alt='close' /></a>
        </header>
        <ul class='form-row'>
          <li>
            <label>Room Name</label>
            <input type='text' />
          </li>
          <li>
            <label>Room use</label>
              <ul class='form-controls'>
                <li><label><input type='radio' name='room_use' value='Living Space' />Living Space</label></li>
                <li><label><input type='radio' name='room_use' value='Bedroom / Sleeping' />Bedroom / Sleeping</label></li>
                <li><label><input type='radio' name='room_use' value='Kid’s Bedroom' />Kid’s Bedroom</label></li>
                <li><label><input type='radio' name='room_use' value='Baby’s Bedroom' />Baby’s Bedroom</label></li>
            </ul>
          </li>
        </ul>
        <div class='inset'>
          <h3>Sensor</h3>
          <ul class='form-row'>
            <li>
              <label>Room use</label>
                <ul class='form-controls'>
                  <li><label><input type='radio' name='sensor' value='253' /><span class='sensor'>253</span>First detected about 1 month ago</label></li>
                  <li><label><input type='radio' name='sensor' value='45' /><span class='sensor'>45</span>First detected 15 days ago</label></li>
                  <li><label><input type='radio' name='sensor' value='Later' />Pair with sensor later</label></li>
                </ul>
            </li>
          </ul>
        </div>
        <footer>
          <a class='btn submit' href='#'>Save Room</a>
        </footer>
      </div>
    )
  }
}

export default AddRoomModal

      // <a className='btn-add append-table open-modal' href='#' data-mfp-src='#new-room'><img className='svg' src='../../../static/img/icon/btn-add.svg' alt='icon' />Add room</a>
