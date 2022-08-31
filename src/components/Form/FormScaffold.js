import React from 'react';
import PropType from 'prop-types';

export default function FormScaffold({ onSubmit, title, children }) {
  return (
    <section className="w-full justify-self-center sm:w-[85%] bg-lime-400 sm:justify-self-end min-h-screen flex items-center">
      <div className="container px-5 py-24 mx-auto sm:py-0">
        <h1 className="mb-4 text-2xl font-bold text-center text-gray-600 sm:text-3xl title-font">
          {title}
        </h1>
        <form className="flex flex-col justify-center max-w-lg rounded sm:mx-auto bg-lime-800" onSubmit={onSubmit}>
          {children}
        </form>
      </div>
    </section>
  );
}

FormScaffold.propTypes = {
  onSubmit: PropType.func.isRequired,
  title: PropType.string.isRequired,
  children: PropType.node.isRequired,
};
