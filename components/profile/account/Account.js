import Header from "../../genApp/Header";
import Menu from "../../genApp/Menu";
import AccountProfile from "./AccountProfile";
import AccountPreferences from "./AccountPreferences";

const Account = () => (
  <div className="content">
    <div className="center">
      <Header />
      <Menu />
      <AccountProfile />
      <AccountPreferences />
    </div>
  </div>
);

export default Account;
