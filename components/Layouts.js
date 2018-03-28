import React from 'react'
import Dashboard from './Dashboard'
import style from "./styles/style"

class Layouts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      registration: undefined,
      convertedVapidKey: null
    }
  }
  componentDidMount () {
    var self = this
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
          console.log('SW registered: ', registration)
          Notification.requestPermission().then(function (result) {
            console.log(result)
            navigator.serviceWorker.ready.then(function (registration) {
              if (!registration.pushManager) {
                alert("Push Unsupported")
                return
              }
              const vapidPublicKey = 'BPCnADjDVFsexLnj6ESRHuu9YlDwg7P8b8k4_mi48LB8UDAYvTpAWYfBofUD8F9LWkh6U0dJqX0kCoF-yWb-tbM'
              const convertedVapidKey = urlBase64ToUint8Array(vapidPublicKey)
              function urlBase64ToUint8Array (base64String) {
                const padding = '='.repeat((4 - base64String.length % 4) % 4)
                const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
                const rawData = window.atob(base64)
                const outputArray = new Uint8Array(rawData.length)
                for (let i = 0; i < rawData.length; ++i) {
                  outputArray[i] = rawData.charCodeAt(i)
                }
                return outputArray
              }
              console.log('converted vapid key', convertedVapidKey);
              self.setState({
                registration: registration,
                convertedVapidKey: convertedVapidKey
              })
            })
          }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError)
          })
        })
      })
    }
  }
  render() {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
      </div>
    );
  }
}

export default Layouts;
