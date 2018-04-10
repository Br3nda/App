const AccountProfile = () => (
  <div>
    <h1 class='sm narrow-down-only'>My Account</h1>
    <section class='card'>
      <header>
        <h2>My Account</h2>
      </header>
      <ul class='form-row'>
        <li class='half'>
          <label>Name</label><span class='helper'>(optional)</span>
          <input type='text' placeholder='First / Given Name' />
        </li>
        <li class='half collapse-mob'>
          <label class='hidden'>Last Name</label>
          <input type='text' placeholder='Last / Family Name' />
        </li>
        <li class='max-half'>
          <label>Email Address</label>
          <input type='text' />
        </li>
        <li class='half'>
          <label>Password</label><span class='helper'>(Leave blank if you dont want to change it)</span>
          <input type='password' />
        </li>
        <li class='half'>
          <label>Repeat Password</label><span class='helper'>(Required if changing password)</span>
          <input type='password' />
        </li>
        <li class='max-half'>
          <label>Current Password</label><span class='helper'>(Required if changing password)</span>
          <input type='password' />
        </li>
      </ul>
      <footer>
        <a class='btn submit' href='#'>Save Changes</a>
        <a class='del' href='#'><img class='svg' src='./img/icon/del.svg' alt='icon' />Cancel Account</a>
      </footer>
    </section>
  </div>
)

export default AccountProfile
