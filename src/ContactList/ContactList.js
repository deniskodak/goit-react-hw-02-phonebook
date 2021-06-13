import React from "react";
import Contact from "../Contact";
import PropTypes from "prop-types";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
