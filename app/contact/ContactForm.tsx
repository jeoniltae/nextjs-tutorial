"use client";

import { useState } from 'react'

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form (클라이언트 방식)
    // console.log("Submit:", { email, message });
    // alert("Form submitted!");

    // API Routes 방식
    await fetch('/api/contact', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    alert("Message sent!");
  }

  return (
    // Form (클라이언트 방식), API Routes 방식
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea value={message} onChange={e => setMessage(e.target.value)} />
      <button type='submit'>Send</button>
    </form>
  )
}

export default ContactForm;
