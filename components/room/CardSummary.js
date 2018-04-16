const CardSummary = (props) => {
  console.log('this is CardSummary name', props.room);
  const room = props.room
  const name = room.name
  const type = room.roomUse
  const temp = room.temperature.value
  const time = room.temperature.timestamp
  const humidity = room.humidity.value
  const message = room.generalMsg

  return (
    <div>
      <section className='card summary'>
        <header>
          <h2>{name}</h2>
          <h4>{type}</h4>
          <a className='head-action' href='#'><img className='svg' src='../../../static/img/icon/edit.svg' alt='edit' /></a>
        </header>
        <div className='readings'>
          <div className='reading temp-low-2a'>
            <span className='vis'><span className='loader'></span></span>
            <span className='value'>{temp}</span>
            <span className='label'>Temperature</span>
            <span className='time'>{time}</span>
          </div>
          <div className='reading hum-mid-a'>
            <span className='vis'><span className='loader'></span></span>
            <span className='value'>{humidity}</span>
            <span className='label'>Humidity</span>
            <span className='time'>{time}</span>
          </div>
        </div>
        <footer className='grade-low'>
          <p>{message}
            <br /><a className='underline' href='#'>Learn how to fix this</a>.</p>
          <a className='btn' href='room-detail3.html'><img className='svg' src='../../../static/img/icon/btn-analyse.svg' alt='icon' />Analyse</a>
        </footer>
      </section>
    </div>
  )
}

export default CardSummary
