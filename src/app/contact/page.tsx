import type { Metadata } from "next";
import Icon from "@/components/ui/Icon";
import ContactForm from "@/features/contact/ContactForm";

export const metadata: Metadata = {
  title: "Get in touch",
  description: "Send the Cookoing kitchen a note, a question or a recipe idea.",
};

export default function ContactPage() {
  return (
    <div className="container page-shell contact-page">
      <div className="contact-intro">
        <span className="eyebrow"><span className="eyebrow-dot" /> DROP US A LINE</span>
        <h1>We’d love to<br /><em>hear from you.</em></h1>
        <p>Have a question, a recipe idea or a little kitchen win to share? There’s room for all of it here.</p>
        <div className="contact-aside-note"><span className="contact-note-icon"><Icon name="mail" size={20} /></span><span><strong>A note is always welcome.</strong><small>Use the form and your email app will take it from there.</small></span></div>
      </div>
      <div className="contact-form-panel">
        <span className="eyebrow">THE INBOX</span>
        <h2>Send a little hello.</h2>
        <ContactForm />
      </div>
    </div>
  );
}
