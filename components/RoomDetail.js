import Menu from './Menu'
import Header from './Header'
import ReportCard from './ReportCard'
import HealthAlert from './HealthAlert'
import Readings from './Readings'
import SensorInfo from './SensorInfo'

export default (props) => (
  <div>
    <Header />
    <Menu />
    <div className='content'>
      <div className='center'>
        <h1 className='sm narrow-down-only'><a className='back' href='#'><img className='svg' src='./img/icon/back.svg' alt='back' /></a>Lisefski House</h1>
        <ReportCard />
        <HealthAlert />
        <Readings />
        <SensorInfo />
      </div>
    </div>
  </div>
)
