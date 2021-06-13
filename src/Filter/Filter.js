import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, onFilter }) => (
  <label>
    <input
      type="text"
      name="filter"
      value={value}
      autoComplete="off"
      onChange={onFilter}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
export default Filter;
