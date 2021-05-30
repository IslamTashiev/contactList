import React, { useContext, useEffect } from "react";
import { contactContext } from "../../Context";
import cancle from "../icons/cancel.svg";
import pancil from "../icons/pencil.svg";
import classes from "../index.module.css";

export default function ContactList() {
  const { contactList, fetchContact, deleteContact } =
    useContext(contactContext);

  useEffect(() => {
    fetchContact();
  }, [contactList.map((contact) => contact.id)]);

  const handleDelete = () => {
    contactList.map((contact) => deleteContact(contact.id));
  };

  return (
    <div className={classes.contact_list}>
      <h1 style={{ textAlign: "center" }}>Contact List</h1>
      {contactList.map((contact) => (
        <ul key={contact.id}>
          <div>
            <h2>{contact.fullName}</h2>
            <p>{contact.email}</p>
            <p>{contact.phoneNumber}</p>
          </div>
          <div>
            <img onClick={handleDelete} src={cancle} />
            <img src={pancil} />
          </div>
        </ul>
      ))}
    </div>
  );
}
