import Header from '../../genApp/Header'
import Menu from '../../genApp/Menu'
import AccountProfile from './AccountProfile'
import Preferences from './Preferences'

const Account = () => (
  <div class='content'>
    <div class='center'>
      <Header />
      <Menu />
      <AccountProfile />
      <Preferences />
    </div>
  </div>
)

export default Account
