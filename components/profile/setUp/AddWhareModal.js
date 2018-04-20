const AddWhareModal = () => (
  <div id='new-whare' class='modal mfp-hide'>
    <header>
      <h2>New Whare</h2>
      <a class='head-action close' href='#'><img class='svg' src='./img/icon/x.svg' alt='close' /></a>
    </header>
    <ul class='form-row'>
      <li>
        <label>House Name</label>
        <input type='text' />
      </li>
      <li>
        <label>Property Type</label>
        <ul class='form-controls'>
          <li><label><input type='radio' name='property_type' value='Owner Occupier' />Owner Occupier</label></li>
          <li><label><input type='radio' name='property_type' value='Social Housing' />Social Housing</label></li>
          <li><label><input type='radio' name='property_type' value='Private Rental' />Private Rental</label></li>
          <li><label><input type='radio' name='property_type' value='Workplace / Office' />Workplace / Office</label></li>
        </ul>
      </li>
    </ul>
    <footer>
      <a class='btn submit' href='#'>Save Whare</a>
    </footer>
  </div>
)

export default AddWhareModal
