import Menu from './Menu'
import Header from './Header'

export default (props) => (
  <div>
    <Header />
    <Menu />
    <div className='content'>
      <div className='center'>
        <h1 className='sm narrow-down-only'><a className='back' href='#'><img className='svg' src='./img/icon/back.svg' alt='back' /></a>Lisefski House</h1>
        <section className='card report'>
          <header>
          <h2>Kid&rsquo;s Room</h2>
          <h4>Sleeping / Bedroom</h4>
          <a className='head-action' href='#'><img className='svg' src='./img/icon/edit.svg' alt='edit' /></a>
          </header>
          <div className='readings'>
           <div className='reading temp-low-2a'>
             <span className='vis'><span className='loader'></span></span>
             <span className='value'>15.9°C</span>
             <span className='label'>Temperature</span>
             <span className='time'>5 minutes ago</span>
           </div>
           <div className='reading hum-high-2a'>
             <span className='vis'><span className='loader'></span></span>
             <span className='value'>80.6%</span>
             <span className='label'>Humidity</span>
             <span className='time'>5 minutes ago</span>
           </div>
           <div className='reading dew-mid'>
             <span className='vis'><span className='loader'></span></span>
             <span className='value'>11.9°C</span>
             <span className='label'>Dewpoint</span>
             <span className='time'>5 minutes ago</span>
           </div>
          </div>
          <div className='report-card grade-low'>
             <div className='rating'>
               <span className='grade'>F</span>
               <span className='value'>Very Poor</span>
               <span className='label'>Rating</span>
             </div>
             <ul className='check'>
               <li className='bullet'>Way too cold for children sleeping<a className='i tooltip' href='#' title='Tooltip content'><img className='svg' src='./img/icon/i.svg' alt='info' /></a></li>
               <li className='bullet'>High relative humidity</li>
               <li>Acceptable dewpoint</li>
               <li className='bullet'>Risk for cold, damp, and mould<a className='i tooltip' href='#' title='Tooltip content'><img className='svg' src='./img/icon/i.svg' alt='info' /></a></li>
               <li className='none'><a className='underline' href='#'>Learn how to fix this</a></li>
             </ul>
          </div>
        </section>
        <section className='card alert health-alert with-image'>

          <header>
          <h2 className='secondary'>Health Warning</h2>
          <a className='head-action' href='#'><img className='svg' src='./img/icon/x.svg' alt='close' /></a>
          </header>
          <p>The World Health Organisation recommends temperatures above 20 degrees for children. Allowing children to continue to sleep in this room without adequate heating may result in increased risk of respiratory illness. </p>
          <a className='btn' href='#'><img className='svg' src='./img/icon/btn-i.svg' alt='icon' />Learn how to fix this</a>
          <footer>
            <p><a className='underline' href='#'>Dismiss alert</a> – I’m happy with the temperature of this room</p>
          </footer>
        </section>
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
