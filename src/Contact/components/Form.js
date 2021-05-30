import React, { useContext, useState } from "react";
import { contactContext } from "../../Context";
import classes from "../index.module.css";

export default function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const { createContact } = useContext(contactContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const contacts = {
      fullName: name,
      email,
      phoneNumber: phone,
    };
    createContact(contacts);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className={classes.contact_form}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
          value={name}
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          placeholder="Email"
          required
          value={email}
        />
        <input
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required
          value={phone}
        />
        <button>CREATE</button>
      </form>
    </div>
  );
}
