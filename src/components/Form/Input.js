import React from 'react';
import PropTypes from 'prop-types';

export default function Input({
  label, name, type, onChange, value, placeholder,
}) {
  return (
    <label htmlFor={name} className="flex flex-col p-3 text-sm font-medium text-white">
      {label}
      <input
        onChange={onChange}
        type={type}
        id={name}
        className="p-2 mt-1 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
        name={name}
        value={value}
        placeholder={placeholder}
        required
      />
    </label>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
