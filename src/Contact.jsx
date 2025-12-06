// src/Contact.jsx
import { useMemo, useState } from "react";

const timeOptions = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
];

function getMonthMatrix(year, month) {
  const first = new Date(year, month, 1);
  const startDay = first.getDay(); // 0 = Sunday
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const matrix = [];
  let day = 1 - startDay;
  for (let w = 0; w < 6; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const current = new Date(year, month, day);
      week.push({
        date: current,
        inMonth: current.getMonth() === month,
        label: current.getDate(),
      });
      day += 1;
    }
    matrix.push(week);
  }
  return matrix;
}

export default function Contact() {
  const today = new Date();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [submitting, setSubmitting] = useState(false);
  const [popup, setPopup] = useState(null);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedTime, setSelectedTime] = useState("");

  const monthMatrix = useMemo(
    () => getMonthMatrix(viewYear, viewMonth),
    [viewYear, viewMonth]
  );
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const selectedLabel = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  function changeMonth(delta) {
    const next = new Date(viewYear, viewMonth + delta, 1);
    setViewYear(next.getFullYear());
    setViewMonth(next.getMonth());
  }

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", text: "" });

    const payload = {
      ...form,
      preferred_date: selectedDate.toISOString(),
      preferred_time: selectedTime,
    };

    // testing to see if booking payload is showing
    console.log("booking request:", payload);

    setStatus({
      type: "ok",
      text: "Successfully sent. (also in console output)",
    });
    setPopup({
      title: "Message sent",
      detail:
        "Thanks for reaching out. We received your note and will follow up soon.",
    });
    setForm({ name: "", email: "", phone_number: "", message: "" });
    setSelectedTime("");
    setSubmitting(false);
  }

  function onSchedule() {
    if (!selectedDate || !selectedTime) return;
    const payload = {
      ...form,
      preferred_date: selectedDate.toISOString(),
      preferred_time: selectedTime,
    };
    console.log("schedule request:", payload);
    setPopup({
      title: "Session scheduled",
      detail: `${selectedLabel} at ${selectedTime}. We'll confirm details soon.`,
    });
  }

  return (
    <main aria-labelledby="contact-title">
      <h1 id="contact-title">Get In Touch</h1>

      <section aria-label="Appointment Booking">
        <h2>Book an Appointment</h2>
        <p>
          Whether you're curious about a retreat, ritual, or immersion
          experience, or just want to ask questions, I'd love to connect. Use
          the form below or reach out via email or phone.
        </p>
      </section>

      <section aria-label="Contact details">
        <h2>Contact Details</h2>
        <p>Email: rosa@reclaimingindigeneity.com</p>
        <p>Phone: +1 (617) 488-9988</p>
        <p>
          <em>Let's come home together.</em>
        </p>
      </section>

      <section className="calendar-card" aria-label="Schedule a session">
        <div className="calendar-nav">
          <button
            type="button"
            className="ghost"
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
          ></button>
          <div className="calendar-month" aria-live="polite">
            {monthLabel}
          </div>
          <button
            type="button"
            className="ghost"
            onClick={() => changeMonth(1)}
            aria-label="Next month"
          ></button>
        </div>

        <div className="calendar-grid" aria-label="Select a date">
          {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
            <div key={d} className="calendar-day-head">
              {d}
            </div>
          ))}
          {monthMatrix.map((week, wi) =>
            week.map((day, di) => {
              const isSelected =
                day.inMonth &&
                day.date.toDateString() === selectedDate.toDateString();
              const isToday = day.date.toDateString() === today.toDateString();
              return (
                <button
                  key={`${wi}-${di}`}
                  type="button"
                  className={`calendar-cell${day.inMonth ? "" : " muted"}${
                    isSelected ? " selected" : ""
                  }${isToday && !isSelected ? " today" : ""}`}
                  onClick={() => {
                    if (day.inMonth) {
                      setSelectedDate(day.date);
                      setSelectedTime("");
                    }
                  }}
                  disabled={!day.inMonth}
                  aria-pressed={isSelected}
                  aria-label={day.date.toDateString()}
                >
                  {day.label}
                </button>
              );
            })
          )}
        </div>

        <div className="times">
          <div className="times-header">
            <div>{selectedLabel}</div>
            <small>Choose a time</small>
          </div>
          <div className="times-grid">
            {timeOptions.map((time) => (
              <button
                key={time}
                type="button"
                className={`time-slot${selectedTime === time ? " active" : ""}`}
                onClick={() => setSelectedTime(time)}
                aria-pressed={selectedTime === time}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </section>

      <button
        type="button"
        disabled={submitting || !selectedDate || !selectedTime}
        onClick={onSchedule}
      >
        {submitting ? "Scheduling..." : "Schedule a Session"}
      </button>
      <br></br>

      <section aria-label="Send a message">
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
            <p
              role="status"
              style={{ color: status.type === "ok" ? "green" : "crimson" }}
            >
              {status.text}
            </p>
          )}
        </form>
      </section>

      {popup && (
        <div
          className="popup-overlay"
          role="alertdialog"
          aria-live="assertive"
          aria-modal="true"
          aria-labelledby="popup-title"
          aria-describedby="popup-detail"
        >
          <div className="popup-card">
            <h3>{popup.title}</h3>
            <p>{popup.detail}</p>
            <button
              type="button"
              className="ghost"
              onClick={() => setPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
