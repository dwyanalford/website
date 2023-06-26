// components/ContactForm.js
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from '@/components/Alert';
import styles from '@/styles/ContactForm.module.css';


export default function ContactForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [details, setDetails] = useState("");
    const [recaptcha, setRecaptcha] = useState("");
    const [alert, setAlert] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          subject,
          details,
          recaptcha,
        }),
      });
      const data = await res.json();
      setIsLoading(false);
      if (data.status === "success") {
        setAlert({ type: "success", message: "Your message was sent successfully" });
      } else {
        setAlert({ type: "error", message: "Error: Your message was not sent. Email me at dwyan.alford@gmail.com" });
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setSubject("");
      setDetails("");
      setRecaptcha("");
    };
  
    const isButtonDisabled = !firstName || !lastName || !email || !subject || !details || !recaptcha;
  
    return (
      <div>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
          <textarea placeholder="Message" value={details} onChange={(e) => setDetails(e.target.value)} required />
          <div className={styles.recaptcha}>
            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} onChange={(value) => setRecaptcha(value)} />
          </div>
          <button type="submit" className={isButtonDisabled ? "" : styles.active} disabled={isButtonDisabled}>
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
        {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
      </div>
    );
  }
