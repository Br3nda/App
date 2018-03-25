import Head from 'next/head'
import Header from './Header'

const style = {
  margin: 20,
  padding: '2em',
  border: '1px solid red'
}

class Layouts extends React.Component {
  componentDidMount () {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
          console.log('SW registered: ', registration)
          Notification.requestPermission().then(function(result) {
            console.log(result)
          })
        }).catch(registrationError => {
          console.log('SW registration failed: ', registrationError)
        })
      })
    }
  }

  render() {
    return (
      <div style={style}>
        <Head>
          <link rel='manifest' href='static/manifest.json' />
        </Head>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Layouts
