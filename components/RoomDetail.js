import Menu from './Menu'
import Header from './Header'
import ReportCard from './ReportCard'
import HealthAlert from './HealthAlert'

export default (props) => (
  <div>
    <Header />
    <Menu />
    <div className='content'>
      <div className='center'>
        <h1 className='sm narrow-down-only'><a className='back' href='#'><img className='svg' src='./img/icon/back.svg' alt='back' /></a>Lisefski House</h1>
        <ReportCard />
        <HealthAlert />
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
              <img className='placeholder' src='./img/placeholder-graph.png' />
            </div>
          </div>
        </section>
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
      </div>
    </div>
  </div>
)
