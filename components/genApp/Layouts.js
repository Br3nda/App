import style from '../styles/style'
import Head from 'next/head'
import Menu from './Menu'


class Layouts extends React.Component {
  render () {
    return (
      <div>
        <Menu roomsData={this.props.roomsData}/>
        {this.props.children}
        <style jsx global>
          {style}
        </style>
      </div>
    )
  }
}

export default Layouts
