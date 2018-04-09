import Link from 'next/link'

const Login = (props) => (
    <div className='content'>
    <div className='center'>
      <header className='header'>
        <a className='logo' href='./'>Whare Hauora</a>
        <h1 className='lg'>Kia ora</h1>
        <h4 className='lg'>Login to start using Whare Hauora</h4>
      </header>
      <section className='card pre-log'>
        <div className='img'></div>
        <div className='text'>
          <h2 className='secondary'>Login</h2>
          <ul className='form-row'>
            <li>
              <label>Email Address</label>
              <input type='text' />
            </li>
            <li>
              <label>Password</label>
              <input type='password' />
            </li>
            <li>
              Click{' '}
              <Link href='/account'>
                <a className='btn submit'>Login</a>
              </Link>{' '}
            </li>
          </ul>
          <footer>
            <p className='left'><a href='./forgot-password.html' className='underline'>Forgot password?</a></p>
            <p className='right'>Don’t have an account? <a href='./sign-up.html' className='underline'>Sign up</a></p>
          </footer>
        </div>
      </section>
    </div>
  </div>
)

export default Login
