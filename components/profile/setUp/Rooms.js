import Header from '../../genApp/Header'
import Menu from '../../genApp/Menu'
import RoomsList from './RoomsList'
import WhareList from './WhareList'

const Rooms = () => (
  <div className='content'>
    <div className='center'>
      <Header />
      <Menu />
      <RoomsList />
      <WhareList />
    </div>
  </div>
)

export default Rooms
