const styles = {
  button: {
    width: '200px',
    height: '50px',
    backgroundColor: 'grey',
    color: 'white',
    marginBottom: '2em',
    fontSize: '1em',
  }
}

const Dashboard = (props) => (
  <div>
    <header className="header">
      <a className="logo-sm" href="./">Whare Hauora</a>
      <a className="open-menu" href="#"><span className="label">Menu</span><img className="svg" src="../static/img/icon/menu.svg" alt="menu" /></a>
    </header>
    <div className="overlay"></div>
    <nav className="menu">
      <header>
        <a className="logo" href="./">Whare Hauora</a>
        <h6>Menu</h6>
        <a className="x" href="#"><img className="svg" src="../static/img/icon/x.svg" alt="close" /></a>
      </header>
      <div className="nav">
        <ul className="nav-links">
          <li><a className="current" href="./dashboard.html">Dashboard</a></li>
        </ul>
        <h6>Rooms</h6>
        <ul className="nav-links">
          <li><a href="./room-detail1.html">Living Room</a></li>
          <li><a href="./room-detail2.html">Master Bedroom</a></li>
          <li><a href="./room-detail3.html">Kids Room</a></li>
        </ul>
        <h6>Setup</h6>
        <ul className="nav-links">
          <li><a href="./rooms.html">Whare & Rooms</a></li>
          <li><a href="./whanau.html">Whānau</a></li>
        </ul>
        <h6>Account</h6>
        <ul className="nav-links">
          <li><a href="./account.html">My Account</a></li>
          <li><a href="./help.html">Help</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>
      <footer>
        <select className="lang-picker">
          <option value="English" data-iconurl="/img/icon/lang-eng.svg" selected>English</option>
          <option value="Te Reo Māori" data-iconurl="/img/icon/lang-mri.svg">Te Reo Māori</option>
          <option value="Samoan" data-iconurl="/img/icon/lang-smo.svg">Samoan</option>
        </select>
      </footer>
    </nav>
  <div className="content">
    <div className="center">
      <h1>Lisefski House</h1>
      <button style={styles.button}>Enable Push Notifications</button>
      <div className="summary-grid">
        <section className="card summary">
          <header>
            <h2>Living Room</h2>
            <h4>Living Space</h4>
            <a className="head-action" href="#"><img className="svg" src="../static/img/icon/edit.svg" alt="edit" /></a>
          </header>
          <div className="readings">
            <div className="reading temp-low-1a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">17.3°C</span>
              <span className="label">Temperature</span>
              <span className="time">5 minutes ago</span>
            </div>
            <div className="reading hum-mid-a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">31.6%</span>
              <span className="label">Humidity</span>
              <span className="time">5 minutes ago</span>
            </div>
          </div>
          <footer className="grade-high">
            <p>Slightly too cool, but otherwise healthy.</p>
            <a className="btn" href="room-detail1.html"><img className="svg" src="../static/img/icon/btn-analyse.svg" alt="icon" />Analyse</a>
          </footer>
        </section>
        <section className="card summary">
          <header>
            <h2>Master Bedroom</h2>
            <h4>Sleeping / Bedroom</h4>
            <a className="head-action" href="#"><img className="svg" src="../static/img/icon/edit.svg" alt="edit" /></a>
          </header>
          <div className="readings">
            <div className="reading temp-high-2a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">27.0°C</span>
              <span className="label">Temperature</span>
              <span className="time">5 minutes ago</span>
            </div>
            <div className="reading hum-high-2a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">80.6%</span>
              <span className="label">Humidity</span>
              <span className="time">5 minutes ago</span>
            </div>
          </div>
          <footer className="grade-mid">
            <p>Too hot and humid for sleeping.
              <br /><a className="underline" href="#">Learn how to fix this</a>.</p>
            <a className="btn" href="room-detail2.html"><img className="svg" src="../static/img/icon/btn-analyse.svg" alt="icon" />Analyse</a>
          </footer>
        </section>
        <section className="card summary">
          <header>
            <h2>Kid&rsquo;s Room</h2>
            <h4>Sleeping / Bedroom</h4>
            <a className="head-action" href="#"><img className="svg" src="../static/img/icon/edit.svg" alt="edit" /></a>
          </header>
          <div className="readings">
            <div className="reading temp-low-2a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">15.9°C</span>
              <span className="label">Temperature</span>
              <span className="time">5 minutes ago</span>
            </div>
            <div className="reading hum-mid-a">
              <span className="vis"><span className="loader"></span></span>
              <span className="value">34.5%</span>
              <span className="label">Humidity</span>
              <span className="time">5 minutes ago</span>
            </div>
          </div>
          <footer className="grade-low">
            <p>Too cold for children to be sleeping.
              <br /><a className="underline" href="#">Learn how to fix this</a>.</p>
            <a className="btn" href="room-detail3.html"><img className="svg" src="../static/img/icon/btn-analyse.svg" alt="icon" />Analyse</a>
          </footer>
        </section>
      </div>
    </div>
  </div>
  </div>
)

export default Dashboard
