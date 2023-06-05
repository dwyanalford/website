//components/ContactUs.js
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle contact us logic here
  };

  return (
    <div className="section">
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <h2>Contact Me</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
        <button type="submit">Submit</button>
        <style jsx>{`
            form {
            margin: 0 auto;
            max-width: 400px;
            width: 100%;
            padding: 20px;
            }
            h2 {
            margin-bottom: 20px;
            }
            label {
            display: block;
            margin-bottom: 10px;
            }
            input,
            textarea {
            padding: 10px;
            margin-bottom: 20px;
            border-radius: 5px;
            border: 1px solid #ccc;
            width: 100%;
            }
            textarea {
            height: 150px;
            }
            button {
            background-color: #0070f3;
            color: #fff;
            padding: 10px 20px;
            border-radius: 5px;
            border: none;
            cursor: pointer;
            width: 100%;
            }
            @media only screen and (min-width: 768px) {
            form {
                max-width: 600px;
            }
            }
        `}</style>
        </form>
    </div>    
  );
};

export default ContactUs;
