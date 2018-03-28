import React from 'react'
// import Dashboard from './Dashboard'
import style from './styles/style'

class Layouts extends React.Component {

  render () {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
      </div>
    )
  }
}

export default Layouts
