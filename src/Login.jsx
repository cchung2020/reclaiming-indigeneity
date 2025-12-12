import { useState } from "react";


export default function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [createAccForm, setCreatAccForm] = useState({
    email: "",
    password: "",
  })

  const initialy_logged_in = localStorage.getItem("login_token") !== null;
  const [logged_in, setLoggedIn] = useState(initialy_logged_in);

  function logOut() {
    localStorage.removeItem("login_token");
    setLoggedIn(false);
    console.log("logged in?", logged_in);
  }

  async function onCreateAccountSubmit(e) {
    e.preventDefault()

    const creation_res = await fetch("api/create_account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(createAccForm)
    });

    const data = await creation_res.json();
    const token = data.token;
    console.log(data);

    if (creation_res.ok) {
        setCreatAccForm({email: "", password: ""})
        setLoggedIn(true);
        // localStorage.setItem("logged_in", "yes")
        localStorage.setItem("login_token", token);
    } else {
        window.alert("account creation failed")
    }

  }

  async function onLoginSubmit(e) {
    e.preventDefault();

    const login_res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });

    const data = await login_res.json();
    const token = data.token;

    console.log("login res: ", login_res);
    console.log("data", data);
    console.log("ok?", login_res.ok);

    if (login_res.ok) {
      setLoggedIn(true);
      // localStorage.setItem("logged_in", "yes");
      localStorage.setItem("login_token", token);
    } else {
        window.alert("Incorrect username or password, please try again")
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
        <form id="acc-creation-form" onSubmit={onCreateAccountSubmit}>
            <label htmlFor="email">Email</label>
            <input
                id="creation-email"
                name="email"
                type="email"
                value={createAccForm.email}
                onChange={(e) => setCreatAccForm({ ...createAccForm, email: e.target.value})}
                required
            />
            
            <label htmlFor="password">Password</label>
            <input
                id="creation-password"
                name="password"
                type="password"
                pattern=".{10,}"
                title="Must contain at least 10 characters"
                value={createAccForm.password}
                onChange={(e) => setCreatAccForm({ ...createAccForm, password: e.target.value})}
                required
            />
            <button type="submit">Submit</button>

        </form>

        {/*login form */}
        <h1 id="login-title">Login</h1>
        <form onSubmit={onLoginSubmit}>
          <label htmlFor="email">Email</label>
          <input
            id="login-email"
            name="email"
            type="email"
            value={loginForm.email}
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="login-password"
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
