// NOTE: service worker and push manager commented out. To reinstate, uncomment and pull update button (currently commented out and below the export) back into return - but actually this is not where it is going to live anyway.
import { mapObjIndexed, values, pipe, isEmpty } from 'ramda'
import Menu from '../genApp/Menu'
import Header from '../genApp/Header'
import CardSummary from '../room/CardSummary'

const mapRooms = mapObjIndexed((room, key) => (
    <CardSummary room={room}/>
))
const mapRoomsToValues = pipe(mapRooms, values)

class Dashboard extends React.Component {
//   constructor (props) {
//     super(props)
//     this.subscribeUser = this.subscribeUser.bind(this)
//     this.unsubscribeUser = this.unsubscribeUser.bind(this)
//     this.updateBtn = this.updateBtn.bind(this)
//     this.state = {
//       isRegistered: false
//     }
//   }
//
//   subscribeUser (input) {
//     this.props.registration.pushManager
//         .subscribe({
//           userVisibleOnly: true, // Always display notifications
//           applicationServerKey: this.props.convertedVapidKey
//         })
//         .then(subscription => {
//           console.log('subscription', subscription)
//           window.fetch('/register', {
//             body: JSON.stringify(subscription),
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json'
//             }
//           })
//           this.setState({
//             isRegistered: true
//           })
//         })
//         .catch(err => console.error('Push subscription error: ', err))
//   }
//
//   unsubscribeUser (input) {
//     navigator.serviceWorker.ready
//     .then(registration => {
//       registration.pushManager
//         .getSubscription()
//         .then(subscription => {
//           if (!subscription) {
//             return
//             //If there isn't a subscription, then there's nothing to do
//           }
//           subscription
//           .unsubscribe()
//           .then(() => {
//             window.fetch('/unregister', {
//               body: JSON.stringify(subscription),
//               method: 'DELETE',
//               headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//               }
//             })
//           this.setState({
//             isRegistered: false
//           })
//         })
//         .catch(err => console.error(err))
//     })
//   })
// }
//
// updateBtn() {
//     if (this.state.isRegistered){
//       return <button style={styles.button} className="js-push-btn" onClick={this.unsubscribeUser}>Disable Push Notifications</button>
//     } else {
//       return <button style={styles.button} className="js-push-btn" onClick={this.subscribeUser}>Enable Push Notifications</button>
//     }
// }

  render () {
    console.log('this is roomsData', this.props)
    return (
      <div>
        <Header />
        <div className='overlay'></div>
        <Menu />
        <div className='content'>
          <div className='center'>
            <h1>Lisefski House</h1>
            <div className='summary-grid'>
            {mapRoomsToValues(this.roomsData)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard

// {this.updateBtn()}
