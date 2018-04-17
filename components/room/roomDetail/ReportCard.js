// once I get down to this level, I only want the roomsData that relates to this id available in props.

// <h2>{props.url.query.title}</h2>
const ReportCard = (props) => {

  return(
    <div>
      <section className='card report'>
        <header>
          <h2>{props.detailData.name}</h2>
          <h4>{props.detailData.roomUse}</h4>
          <a className='head-action' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
        </header>
        <div className='readings'>
         <div className='reading temp-low-2a'>
           <span className='vis'><span className='loader'></span></span>
           <span className='value'>{props.detailData.temperature.value}{props.detailData.temperature.unit}</span>
           <span className='label'>Temperature</span>
           <span className='time'>{props.detailData.temperature.timestamp}</span>
         </div>
         <div className='reading hum-high-2a'>
           <span className='vis'><span className='loader'></span></span>
           <span className='value'>{props.detailData.humidity.value}{props.detailData.humidity.unit}</span>
           <span className='label'>Humidity</span>
           <span className='time'>{props.detailData.humidity.timestamp}</span>
         </div>
         <div className='reading dew-mid'>
           <span className='vis'><span className='loader'></span></span>
           <span className='value'>{props.detailData.dewpoint.value}{props.detailData.dewpoint.unit}</span>
           <span className='label'>Dewpoint</span>
           <span className='time'>{props.detailData.dewpoint.timestamp}</span>
         </div>
        </div>
        <div className='report-card grade-low'>
           <div className='rating'>
             <span className='grade'>{props.detailData.grade}</span>
             <span className='value'>!!</span>
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
