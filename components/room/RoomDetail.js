import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Menu from '../genApp/Menu'
import Header from '../genApp/Header'
import ReportCard from './roomDetail/ReportCard'
import Readings from './roomDetail/Readings'
import SensorInfo from './roomDetail/SensorInfo'
import HealthAlert from './roomDetail/HealthAlert'

const mapReportCard = mapObjIndexed((room, key) => (
    <ReportCard room={room} />
))
const mapReportToValues = pipe(mapReportCard, values)

class RoomDetail extends React.Component {

  render () {
    return(
      <div>
        <Header />
        <div className='content'>
          <div className='center'>
            <h1 className='sm narrow-down-only'><a className='back' href='#'><img className='svg' src='../../../static/img/icon/back.svg' alt='back' /></a>Lisefski House</h1>
            {mapReportToValues(this.props.roomsData)}
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

// <Menu />
