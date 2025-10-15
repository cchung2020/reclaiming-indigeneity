export default function Contact() {
  return (
    <main>
      <h1>Contact Us</h1>
      <form action="#" method="post">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" />
        <label for="email">Email</label>
        <input id="email" name="email" type="email" />
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6"></textarea>
        <button type="submit">Send</button>
      </form>
      <section>
        <h2>Location</h2>
        <p>Boyacá, Colombia</p>
      </section>
    </main>
  );
}
