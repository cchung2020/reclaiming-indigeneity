export default function Contact() {
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
        <form action="#" method="post">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6"></textarea>

          <button type="submit">Send</button>
        </form>
      </section>

      <section>
        <h2>Location</h2>
        <p>Boyacá, Colombia</p>
        <p>Hosted within the Casa Romero Retreat Grounds</p>
      </section>
    </main>
  );
}
