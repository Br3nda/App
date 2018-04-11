const Readings = () => (
  <section className='card'>
    <header className='condensed'>
      <h2>Readings</h2>
      <h4>Past 30 days</h4>
      <ul className='legend'>
        <li><span className='temp'></span>Temperature</li>
        <li><span className='hum'></span>Humidity</li>
      </ul>
    </header>
    <div className='graph'>
      <div className='scroller'>
        <img className='placeholder' src='../../../static/img/placeholder-graph.png' />
      </div>
    </div>
  </section>
)
export default Readings
