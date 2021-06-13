import React from "react";
import PropTypes from "prop-types";

const Contact = ({ contact }) => {
  const { name, number } = contact;
  return (
    <li>
      {name}: {number}
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
