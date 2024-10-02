import React from 'react';
import Form from '@rjsf/core';
import Ajv from 'ajv';

// Initialize Ajv for form validation
const ajv = new Ajv({ allErrors: true });

const DynamicForm = ({ schema }) => {
  if (!schema) return null; // Return null if no schema is provided

  // Create a custom validator for the form
  const validator = ajv.compile(schema);

  return (
    <div>
      <h2>Dynamic Form</h2>
      <Form
        schema={schema}
        validator={validator}
        onSubmit={({ formData }) => console.log('Form data submitted:', formData)}
      />
    </div>
  );
};

export default DynamicForm;
