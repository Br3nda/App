const Preferences = () => (
  <section className='card'>
    <header>
      <h2>Notification preferences</h2>
    </header>
    <ul className='form-row'>
      <li>
        <ul className='form-controls'>
          <li><label><input type='checkbox' name='email_health_alert' value='yes' checked />Email me room health alerts</label></li>
          <li><label><input type='checkbox' name='email_new_sensor' value='yes' />Email me when a new sensor is detected</label></li>
          <li><label><input type='checkbox' name='email_sensor_unresponsive' value='yes' />Email me when a sensor is not responding</label></li>
          <li><label><input type='checkbox' name='app_push' value='yes' />Allow push notifications through Whare Hauora app</label></li>
        </ul>
      </li>
    </ul>
    <footer>
      <a className='btn submit' href='#'>Save Preferences</a>
    </footer>
  </section>
)

export default Preferences
