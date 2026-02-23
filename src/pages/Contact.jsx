import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return setError("Invalid Email");
    if (msg.length < 5) return setError("Message too short");
    alert("Feedback Submitted");
    setError("");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>User Feedback</h2>
      {error && <p className="error">{error}</p>}
      <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
      <textarea placeholder="Message" onChange={e=>setMsg(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}