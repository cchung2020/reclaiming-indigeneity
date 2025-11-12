import { useState } from "react";


export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const initialy_logged_in = (localStorage.getItem('logged_in') !== null);
    console.log("initially logged in?", initialy_logged_in);
    const [logged_in, setLoggedIn] = useState(initialy_logged_in);
    console.log("logged in here?:", logged_in)

    function logOut() {
        console.log("trying to log out");
        localStorage.removeItem('logged_in')
        setLoggedIn(false);
        console.log("logged in?", logged_in)
    }

    async function onSubmit(e) {
        e.preventDefault()

        const form_json = JSON.stringify(form);
        console.log(`pretending to submit ${form_json}`)

        const login_res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })    

        const data = await login_res.json()

        console.log("login res: ", login_res)
        console.log('data', data)
        console.log("ok?", login_res.ok)

        if (login_res.ok) {
            setLoggedIn(true);
            localStorage.setItem('logged_in', 'yes');
        }


    }

    if (logged_in) {
        console.log("returning the 'logged in' screen, logged_in = ", logged_in, Boolean(logged_in));
        return (
            <main>
                <h1>You are logged in</h1>
                <button onClick={logOut}>Log out?</button>
            </main>
        )
    } else {
        return (
            <main>
                <h1>
                    Login
                </h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={(e) => setForm({...form, password: e.target.value })}
                        required
                    />

                    <button type="submit">
                        Submit
                    </button>

                </form>
            </main>
        )
    }
}