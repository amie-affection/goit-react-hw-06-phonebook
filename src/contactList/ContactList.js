import React from "react";
import { connect } from "react-redux";
import OneContact from "../oneContact/OneContact";
import FilterContacts from "../filterContacts/FilterContacts";

const ContactList = ({ contactList, filter, onChange, deleteContact }) => {
  return (
    <>
      <h2 style={{ marginLeft: "30px" }}>Contacts</h2>
      <FilterContacts filter={filter} onChange={onChange} />
      <ul>
        {contactList.map((contact) => (
          <OneContact
            contact={contact}
            key={contact.id}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    contactList: state.contactRoot.contactReducer,
  };
};

export default connect(mapStateToProps)(ContactList);
