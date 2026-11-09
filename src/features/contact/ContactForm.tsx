"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Icon from "@/components/ui/Icon";

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!contactEmail) {
      setStatus("Email delivery is not configured yet. Add NEXT_PUBLIC_CONTACT_EMAIL to your environment to enable this form.");
      return;
    }

    const subject = encodeURIComponent(`A note from ${name.trim()}`);
    const body = encodeURIComponent(`${message.trim()}\n\nFrom: ${name.trim()}\nReply to: ${email.trim()}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Your email draft is ready in your mail app.");
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-field-row">
        <label className="form-field"><span>Your name</span><input value={name} onChange={(event) => setName(event.target.value)} name="name" autoComplete="name" placeholder="How should we call you?" required maxLength={80} /></label>
        <label className="form-field"><span>Email address</span><input value={email} onChange={(event) => setEmail(event.target.value)} type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
      </div>
      <label className="form-field"><span>Your message</span><textarea value={message} onChange={(event) => setMessage(event.target.value)} name="message" rows={6} placeholder="Tell us what’s on your mind..." required maxLength={3000} /></label>
      <div className="contact-form-bottom">
        <button className="button button-dark" type="submit">Prepare message <Icon name="arrow-up-right" size={17} /></button>
        <span className="form-helper">We’ll use your email app to send your note.</span>
      </div>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
