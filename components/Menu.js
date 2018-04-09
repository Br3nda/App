import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/room-profile?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Menu = () => (
  <nav className='menu'>
    <header>
      <a className='logo' href='./'>Whare Hauora</a>
      <h6>Menu</h6>
      <a className='x' href='#'><img className='svg' src='../static/img/icon/x.svg' alt='close' /></a>
    </header>
    <div className='nav'>
      <ul className='nav-links'>
        <li><a className='current' href='./dashboard.html'>Dashboard</a></li>
      </ul>
      <h6>Rooms</h6>
      <ul className='nav-links'>
        <PostLink title='Living Room' />
        <PostLink title='Master Bedroom' />
        <PostLink title='Kids Bedroom' />
      </ul>
      <h6>Setup</h6>
      <ul className='nav-links'>
        <li><a href='./rooms.html'>Whare & Rooms</a></li>
        <li><a href='./whanau.html'>Whānau</a></li>
      </ul>
      <h6>Account</h6>
      <ul className='nav-links'>
        <li><a href='./account.html'>My Account</a></li>
        <li><a href='./help.html'>Help</a></li>
        <li><a href='#'>Logout</a></li>
      </ul>
    </div>
    <footer>
      <select className='lang-picker'>
        <option value='English' data-iconurl='/img/icon/lang-eng.svg' selected>English</option>
        <option value='Te Reo Māori' data-iconurl='/img/icon/lang-mri.svg'>Te Reo Māori</option>
        <option value='Samoan' data-iconurl='/img/icon/lang-smo.svg'>Samoan</option>
      </select>
    </footer>
  </nav>
)

export default Menu
