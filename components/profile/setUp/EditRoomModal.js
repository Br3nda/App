const EditRoomModal = () => (
  <div id='edit-room' class='modal mfp-hide'>
    <header>
      <h2>Edit Room</h2>
      <a class='head-action close' href='#'><img class='svg' src='./img/icon/x.svg' alt='close' /></a>
    </header>
    <ul class='form-row'>
      <li>
        <label>Room Name</label>
        <input type='text' value='Living Room' />
      </li>
      <li>
        <label>Room use</label>
        <ul class='form-controls'>
          <li><label><input type='radio' name='room_use' value='Living Space' checked />Living Space</label></li>
          <li><label><input type='radio' name='room_use' value='Bedroom / Sleeping' />Bedroom / Sleeping</label></li>
          <li><label><input type='radio' name='room_use' value='Kid’s Bedroom' />Kid’s Bedroom</label></li>
          <li><label><input type='radio' name='room_use' value='Baby’s Bedroom' />Baby’s Bedroom</label></li>
        </ul>
      </li>
    </ul>
    <div class='inset'>
      <h3>Sensor<span class='sensor'>146</span></h3>
      <dl class='col4'>
        <dt>First Detected</dt>
        <dd>04 Jul, 2017</dd>
        <dt>Last reading</dt>
        <dd>5 minutes ago</dd>
        <dt>Battery</dt>
        <dd>76%</dd>
        <dt>Software</dt>
        <dd>v2.1</dd>
      </dl>
      <p><a class='underline' href='#'>Disconnect from room</a></p>
    </div>
    <footer>
      <a class='btn submit' href='#'>Save Room</a>
      <a class='del' href='#'><img class='svg' src='./img/icon/del.svg' alt='icon' />Remove Room</a>
    </footer>
  </div>
)

export default EditRoomModal
