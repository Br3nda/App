import React from 'react'
// import Dashboard from './Dashboard'
import style from '../styles/style'
import Head from 'next/head'

class Layouts extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link rel='manifest' href='static/manifest.json' />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Roboto:300,400,700&amp;subset=latin-ext" rel="stylesheet" />
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
