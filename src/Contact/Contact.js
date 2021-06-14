import React from "react";
import PropTypes from "prop-types";
import { Li, Button } from "./styled";

const Contact = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <Li>
      {name}: {number}
      <Button type="button" onClick={() => onDelete(id)}>
        X
      </Button>
    </Li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};

export default Contact;
