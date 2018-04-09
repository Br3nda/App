const HealthAlert = () => (
  <section className='card alert health-alert with-image'>
    <header>
      <h2 className='secondary'>Health Warning</h2>
      <a className='head-action' href='#'><img className='svg' src='../static/img/icon/x.svg' alt='close' /></a>
    </header>
    <p>The World Health Organisation recommends temperatures above 20 degrees for children. Allowing children to continue to sleep in this room without adequate heating may result in increased risk of respiratory illness. </p>
    <a className='btn' href='#'><img className='svg' src='../static/img/icon/btn-i.svg' alt='icon' />Learn how to fix this</a>
    <footer>
      <p><a className='underline' href='#'>Dismiss alert</a> – I’m happy with the temperature of this room</p>
    </footer>
  </section>
)

export default HealthAlert

// this needs the background image added.
