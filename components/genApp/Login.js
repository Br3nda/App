import Link from "next/link";

const Login = () => (
  <div className="content-login">
    <div className="center">
      <header className="header">
        <a className="logo" href="./">
          Whare Hauora
        </a>
      </header>
      <section className="card pre-log">
        <div className="img" />
        <div className="text">
          <h1>Kia ora - login to start using Whare Hauora</h1>
          <h2 className="secondary">Login</h2>
          <ul className="form-row">
            <li>
              <label>Email Address</label>
              <input type="text" />
            </li>
            <li>
              <label>Password</label>
              <input type="password" />
            </li>
            <li>
              {" "}
              <Link href="/dashboard" replace>
                <a className="btn submit">Login</a>
              </Link>{" "}
            </li>
          </ul>
          <footer>
            <p className="left">
              <a href="./forgot-password.html" className="underline">
                Forgot password?
              </a>
            </p>
            <p className="right">
              Don’t have an account?{" "}
              <a href="./sign-up.html" className="underline">
                Sign up
              </a>
            </p>
          </footer>
        </div>
      </section>
    </div>
  </div>
);

export default Login;
