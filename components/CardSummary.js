const CardSummary = () => (
  <section className='card summary'>
    <header>
      <h2>Living Room</h2>
      <h4>Living Space</h4>
      <a className='head-action' href='#'><img className='svg' src='../static/img/icon/edit.svg' alt='edit' /></a>
    </header>
    <div className='readings'>
      <div className='reading temp-low-1a'>
        <span className='vis'><span className='loader'></span></span>
        <span className='value'>17.3°C</span>
        <span className='label'>Temperature</span>
        <span className='time'>5 minutes ago</span>
      </div>
      <div className='reading hum-mid-a'>
        <span className='vis'><span className='loader'></span></span>
        <span className='value'>31.6%</span>
        <span className='label'>Humidity</span>
        <span className='time'>5 minutes ago</span>
      </div>
    </div>
    <footer className='grade-high'>
      <p>Slightly too cool, but otherwise healthy.</p>
      <a className='btn' href='room-detail1.html'><img className='svg' src='../static/img/icon/btn-analyse.svg' alt='icon' />Analyse</a>
    </footer>
  </section>
)

export default CardSummary
