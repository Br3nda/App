import React from 'react'
// import Dashboard from './Dashboard'
import style from './styles/style'
import Head from 'next/head'

class Layouts extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link rel='manifest' href='static/manifest.json' />
        </Head>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
      </div>
    )
  }
}

export default Layouts
