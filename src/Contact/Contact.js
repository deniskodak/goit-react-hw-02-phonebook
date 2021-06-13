import React from "react";
import PropTypes from "prop-types";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
