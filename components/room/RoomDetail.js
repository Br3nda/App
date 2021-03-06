import Header from '../genApp/Header'
import ReportCard from './roomDetail/ReportCard'
import Readings from './roomDetail/Readings'
import SensorInfo from './roomDetail/SensorInfo'
import HealthAlert from './roomDetail/HealthAlert'

class RoomDetail extends React.Component {

  render () {
    console.log('this is roomdetail', this.props);
    return(
      <div>
        <Header />
        <div className='content'>
          <div className='center'>
            <h1 className='sm narrow-down-only'><a className='back' href='#'><img className='svg' src='../../../static/img/icon/back.svg' alt='back' /></a>Lisefski House</h1>
            <ReportCard room={this.props.room}/>
            <HealthAlert />
            <Readings />
            <SensorInfo />
          </div>
        </div>
      </div>
    )
  }
}

export default RoomDetail
// <ReportCard roomsData={this.props.roomsData} />

// <Menu />
