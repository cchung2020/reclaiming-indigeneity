import { useState } from "react";

export default function Login() {
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    async function onSubmit(e) {
        e.preventDefault()

        const form_json = JSON.stringify(form);
        console.log(`pretending to submit ${form_json}`)

        const login_res = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        })    

        
    }

    return (
        <main>
            <h1>
                hola
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