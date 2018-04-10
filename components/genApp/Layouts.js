import React from 'react'
import style from '../styles/style'
import Head from 'next/head'

class Layouts extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <link rel='manifest' href='static/manifest.json' />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:700|Roboto:300,400,700&amp;subset=latin-ext" rel="stylesheet" />
          <link rel="shortcut icon" href="./favicon.ico" />
          <meta name='mobile-web-app-capable' content='yes' key='viewport' />
          <meta name='apple-mobile-web-app-capable' content='yes' key='viewport' />
          <meta name='msapplication-starturl' content='/' key='viewport' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' key='viewport' />
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
