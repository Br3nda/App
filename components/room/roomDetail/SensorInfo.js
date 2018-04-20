const SensorInfo = () => (
  <section className='card'>
    <header>
      <h2>Sensor<span className='sensor'>146</span></h2>
    </header>
    <dl className='col4 restrict-width'>
      <dt>First Detected</dt>
      <dd>04 Jul, 2017</dd>
      <dt>Last reading</dt>
      <dd>5 minutes ago</dd>
      <dt>Battery</dt>
      <dd>76%</dd>
      <dt>Software</dt>
      <dd>v2.1</dd>
    </dl>
    <div className='right-action'>
      <a className='btn small' href='#'>Disconnect from room</a>
    </div>
  </section>
)

export default SensorInfo
