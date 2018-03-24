import React from 'react'

import Layouts from '../components/Layouts'
import Head from 'next/head'

export default class Index extends React.Component {
  componentDidMount () {
    Notification.requestPermission().then(function(result) {
      console.log(result)
    })
  }

  render () {
    return (
      <div>
        <Head>
          <link rel='manifest' href='static/manifest.json' />
        </Head>
        <Layouts>
          <p>Welcome to our awesome app</p>
        </Layouts>
      </div>
    )
  }
}
