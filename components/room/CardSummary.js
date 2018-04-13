const CardSummary = () => (
  <section className='card summary'>
    <header>
      <h2>Kid&rsquo;s Room</h2>
      <h4>Sleeping / Bedroom</h4>
      <a className='head-action' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
    </header>
    <div className='readings'>
      <div className='reading temp-low-2a'>
        <span className='vis'><span className='loader'></span></span>
        <span className='value'>15.9°C</span>
        <span className='label'>Temperature</span>
        <span className='time'>5 minutes ago</span>
      </div>
      <div className='reading hum-mid-a'>
        <span className='vis'><span className='loader'></span></span>
        <span className='value'>34.5%</span>
        <span className='label'>Humidity</span>
        <span className='time'>5 minutes ago</span>
      </div>
    </div>
    <footer className='grade-low'>
      <p>Too cold for children to be sleeping.
        <br /><a className='underline' href='#'>Learn how to fix this</a>.</p>
      <a className='btn' href='room-detail3.html'><img className='svg' src='../../../static/img/icon/btn-analyse.svg' alt='icon' />Analyse</a>
    </footer>
  </section>
)

export default CardSummary
