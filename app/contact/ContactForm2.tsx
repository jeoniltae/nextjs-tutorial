"use client";

import { submitContact } from './actions';

const ContactForm = () => {
  return (
    // Server Actions (Next.js 최신 핵심) 방식
    <form action={submitContact}>
      <input type="text" name="email" />
      <textarea name="message" />
      <button type='submit'>Send</button>
    </form>
  )
}

export default ContactForm;
