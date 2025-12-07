import { useState } from "react";

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const initialy_logged_in = localStorage.getItem("logged_in") !== null;
  const [logged_in, setLoggedIn] = useState(initialy_logged_in);

  function logOut() {
    localStorage.removeItem("logged_in");
    setLoggedIn(false);
    console.log("logged in?", logged_in);
  }

  async function onLoginSubmit(e) {
    e.preventDefault();

    const login_res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });

    const data = await login_res.json();

    console.log("login res: ", login_res);
    console.log("data", data);
    console.log("ok?", login_res.ok);

    if (login_res.ok) {
      setLoggedIn(true);
      localStorage.setItem("logged_in", "yes");
    }
  }



//   return the actual HTML
  if (logged_in) {
    return (
      <main aria-labelledby="login-title">
        <h1 id="login-title">You are logged in</h1>
        <button onClick={logOut}>Log out?</button>
      </main>
    );
  } else {
    return (
      <main aria-labelledby="login-title">

        {/*Account creation form*/}
        <h1 id="account-creation">Create Account</h1>
        {/* <form>
            <label htmlFor="email">Email</label>
            <input
                ""

        </form> */}

        {/*login form */}
        <h1 id="login-title">Login</h1>
        <form onSubmit={onLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginForm.password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </main>
    );
  }
}
