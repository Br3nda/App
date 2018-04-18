import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Link from 'next/link'

const mapRoomNames = mapObjIndexed((room, key) => (
  <li>{room.name}</li>
))
const mapRoomNamesToValues = pipe(mapRoomNames, values)

const PostLink = (props) => (
  <li>
    <Link href={`/room?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Menu = (props) => {

  return (
    <div>
      <nav className='menu'>
        <header>
          <a className='logo' href='./'>Whare Hauora</a>
          <h6>Menu</h6>
          <a className='x' href='#'><img className='svg' src='../static/img/icon/x.svg' alt='close' /></a>
        </header>
        <div className='nav'>
          <ul className='nav-links'>
            <li><Link href='/dashboard'><a className='current'>Dashboard</a></Link></li>
          </ul>
          <h6>Rooms</h6>
          <ul className="nav-links">

          </ul>
          <h6>Setup</h6>
          <ul className='nav-links'>
            <li><Link href='/setup/rooms'><a>Whare & Rooms</a></Link></li>
            <li><Link href='/setup/whanau'><a>Whānau</a></Link></li>
          </ul>
          <h6>Account</h6>
          <ul className='nav-links'>
            <li><Link href='/account'><a>My Account</a></Link></li>
            <li><a href='./help.html'>Help</a></li>
            <li><a href='#'>Logout</a></li>
          </ul>
        </div>
        <footer>
          <select className='lang-picker'>
            <option value='English' data-iconurl='../static/img/icon/lang-eng.svg' selected>English</option>
            <option value='Te Reo Māori' data-iconurl='../static/img/icon/lang-mri.svg'>Te Reo Māori</option>
            <option value='Samoan' data-iconurl='../static/img/icon/lang-smo.svg'>Samoan</option>
          </select>
        </footer>
      </nav>
    </div>
  )
}

export default Menu
