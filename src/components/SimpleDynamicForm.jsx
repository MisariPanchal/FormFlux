import React from 'react';
import './SimpleDynamicForm.css'; // Ensure you have a separate CSS file for styles

const SimpleDynamicForm = ({ schema }) => {
  return (
    <form className="dynamic-form">
      <h3 className="form-title">{schema.title}</h3>
      {Object.keys(schema.properties).map((key) => (
        <div key={key} className="form-group">
          <label htmlFor={key} className="form-label">
            {schema.properties[key].title}:
          </label>
          <input
            type="text"
            id={key}
            name={key}
            className="form-input"
            required={schema.required.includes(key)}
          />
        </div>
      ))}
      <button type="button" className="submit-button">
        Submit
      </button>
    </form>
  );
};

export default SimpleDynamicForm;
