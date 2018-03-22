import Header from './Header'

const style = {
  margin: 20,
  padding: '2em',
  border: '1px solid red'
}

const Layouts = (props) => (
  <div style={style}>
    <Header />
    {props.children}
  </div>
)

export default Layouts
