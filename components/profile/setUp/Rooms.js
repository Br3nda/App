import RoomsList from './RoomsList'
import WhareList from './WhareList'


class Rooms extends React.Component {

  render () {
    return (
      <div className='content'>
        <div className='center'>
          <RoomsList roomsData={this.props.roomsData} />
          <WhareList />
        </div>
      </div>
    )
  }
}

export default Rooms
