import style from '../styles/style'
import Head from 'next/head'



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
