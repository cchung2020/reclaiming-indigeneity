// src/Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");

      setStatus({ type: "ok", text: "Message sent! I’ll get back to you soon." });
      setForm({ name: "", email: "", phone_number: "", message: "" });
    } catch (err) {
      setStatus({ type: "err", text: err.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main>
      <h1>Get In Touch</h1>

      <section>
        <h2>Book an Appointment</h2>
        <p>
          Whether you’re curious about a retreat, ritual, or immersion
          experience, or just want to ask questions, I’d love to connect. Use
          the form below or reach out via email or phone.
        </p>
      </section>

      <section>
        <h2>Contact Details</h2>
        <p>Email: rosa@reclaimingindigeneity.com</p>
        <p>Phone: +1 (617) 488-9988</p>
        <p>
          <em>Let’s come home together.</em>
        </p>
      </section>
      <section>
        <h2>Send a Message</h2>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <label htmlFor="phone_number">Phone</label>
          <input
            id="phone_number"
            name="phone_number"
            type="tel"
            value={form.phone_number}
            onChange={(e) => setForm({ ...form, phone_number: e.target.value })}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />

          <button type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send"}
          </button>

          {status.text && (
            <p role="status" style={{ color: status.type === "ok" ? "green" : "crimson" }}>
              {status.text}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
