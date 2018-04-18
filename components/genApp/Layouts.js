import style from '../styles/style'
import Head from 'next/head'
import Header from './Header'



class Layouts extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
        <Header />
      </div>
    )
  }
}

export default Layouts
