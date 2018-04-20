const AccountProfile = () => (
  <div>
    <h1 className='sm narrow-down-only'>My Account</h1>
    <section className='card'>
      <header>
        <h2>My Account</h2>
      </header>
      <ul className='form-row'>
        <li className='half'>
          <label>Name</label><span className='helper'>(optional)</span>
          <input type='text' placeholder='First / Given Name' />
        </li>
        <li className='half collapse-mob'>
          <label className='hidden'>Last Name</label>
          <input type='text' placeholder='Last / Family Name' />
        </li>
        <li className='max-half'>
          <label>Email Address</label>
          <input type='text' />
        </li>
        <li className='half'>
          <label>Password</label><span className='helper'>(Leave blank if you dont want to change it)</span>
          <input type='password' />
        </li>
        <li className='half'>
          <label>Repeat Password</label><span className='helper'>(Required if changing password)</span>
          <input type='password' />
        </li>
        <li className='max-half'>
          <label>Current Password</label><span className='helper'>(Required if changing password)</span>
          <input type='password' />
        </li>
      </ul>
      <footer>
        <a className='btn submit' href='#'>Save Changes</a>
        <a className='del' href='#'><img className='svg' src='../../../static/img/icon/del.svg' alt='icon' />Cancel Account</a>
      </footer>
    </section>
  </div>
)

export default AccountProfile
