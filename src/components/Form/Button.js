import React from 'react';
import PropType from 'prop-types';

export default function button({ disabled, text }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="px-5 py-3 mx-auto my-5 font-bold transition duration-500 ease-in-out bg-white rounded-lg w-max text-lime-600 enabled:hover:bg-lime-500 enabled:hover:text-white disabled:opacity-50"
    >
      {text}
    </button>
  );
}

button.propTypes = {
  disabled: PropType.bool,
  text: PropType.string.isRequired,
};
