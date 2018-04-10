import React from 'react'
import Menu from '../genApp/Menu'
import Header from '../genApp/Header'
import CardSummary from '../room/CardSummary'

const styles = {
  button: {
    width: "200px",
    height: "50px",
    backgroundColor: "grey",
    color: "white",
    marginBottom: "2em",
    fontSize: "1em"
  }
}

class Dashboard extends React.Component {
  constructor (props) {
    super(props)
    this.subscribeUser = this.subscribeUser.bind(this)
    this.unsubscribeUser = this.unsubscribeUser.bind(this)
    this.updateBtn = this.updateBtn.bind(this)
    this.state = {
      isRegistered: false
    }
  }

  subscribeUser (input) {
    this.props.registration.pushManager
        .subscribe({
          userVisibleOnly: true, // Always display notifications
          applicationServerKey: this.props.convertedVapidKey
        })
        .then(subscription => {
          console.log('subscription', subscription)
          window.fetch('/register', {
            body: JSON.stringify(subscription),
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
          this.setState({
            isRegistered: true
          })
        })
        .catch(err => console.error('Push subscription error: ', err))
  }

  unsubscribeUser (input) {
    navigator.serviceWorker.ready
    .then(registration => {
      registration.pushManager
        .getSubscription()
        .then(subscription => {
          if (!subscription) {
            return
            //If there isn't a subscription, then there's nothing to do
          }
          subscription
          .unsubscribe()
          .then(() => {
            window.fetch('/unregister', {
              body: JSON.stringify(subscription),
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
          this.setState({
            isRegistered: false
          })
        })
        .catch(err => console.error(err))
    })
  })
}

updateBtn() {
    if (this.state.isRegistered){
      return <button style={styles.button} className="js-push-btn" onClick={this.unsubscribeUser}>Disable Push Notifications</button>
    } else {
      return <button style={styles.button} className="js-push-btn" onClick={this.subscribeUser}>Enable Push Notifications</button>
    }
}

  render () {
    return (
      <div>
        <Header />
        <div className='overlay'></div>
        <Menu />
        <div className='content'>
          <div className='center'>
            <h1>Lisefski House</h1>
            {this.updateBtn()}
            <div className='summary-grid'>
              <CardSummary />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
