import Layout from '../components/genApp/Layouts'
import RoomDetail from '../components/room/RoomDetail'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <RoomDetail />
  </div>
)

export default (props) => (
  <div>
    <Layout>
      <Content url={props.url} />
    </Layout>
  </div>
)
