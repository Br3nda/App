// console.log('this is report card', this)
const ReportCard = (props) => {

  return(
    <div>
      <section className='card report'>
        <header>
          <h2>{props.url.query.title}</h2>
          <h4></h4>
          <a className='head-action' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
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
             <li className='bullet'>Way too cold for children sleeping<a className='i tooltip' href='#' title='Tooltip content'><img className='svg' src='../../../static/img/icon/i.svg' alt='info' /></a></li>
             <li className='bullet'>High relative humidity</li>
             <li>Acceptable dewpoint</li>
             <li className='bullet'>Risk for cold, damp, and mould<a className='i tooltip' href='#' title='Tooltip content'><img className='svg' src='../../../static/img/icon/i.svg' alt='info' /></a></li>
             <li className='none'><a className='underline' href='#'>Learn how to fix this</a></li>
           </ul>
        </div>
      </section>
    </div>
  )
}

export default ReportCard
