import Layouts from '../../components/genApp/Layouts'
import WhanauList from '../../components/profile/setUp/WhanauList'
import Menu from '../../components/genApp/Menu'
const exampleData = require('../../db/exampleData.json')

class whanau extends React.Component {
  static async getInitialProps() {
    const roomsData = exampleData
    return { roomsData }
}

  render () {
    return (
      <div>
        <Layouts>
          <Menu roomsData={this.props.roomsData} />
          <WhanauList />
        </Layouts>
      </div>
    )
  }
}

export default whanau
