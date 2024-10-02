import React, { useState } from 'react';
import './CreateForm.css'; // Ensure the CSS file is properly linked
import DynamicForm from './DynamicForm'; // Import the DynamicForm component
import SimpleDynamicForm from './SimpleDynamicForm';

const CreateForm = () => {
  const [formFields, setFormFields] = useState({
    name: false,
    email: false,
    password: false,
    phone: false,
    address: false,
  });
  const [schema, setSchema] = useState(null); // State to store the dynamic schema

  const handleCheckboxChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.checked,
    });
  };

  const handleCreateForm = () => {
    // Dynamically build the schema based on selected fields
    const selectedFields = Object.keys(formFields).filter((field) => formFields[field]);
    
    const schemaProperties = {};
    const requiredFields = [];

    selectedFields.forEach((field) => {
      schemaProperties[field] = { type: 'string', title: field.charAt(0).toUpperCase() + field.slice(1) };
      requiredFields.push(field);
    });

    const dynamicSchema = {
      title: "Dynamic Form",
      type: "object",
      properties: schemaProperties,
      required: requiredFields,
    };

    setSchema(dynamicSchema); // Set the dynamically generated schema
  };

  return (
    <div>
    <div className="form-container">
      <h2 className="form-title">FormFlux</h2>
      <div className="form-fields">
        {Object.keys(formFields).map((field) => (
          <label key={field} className="form-field">
            <input
              type="checkbox"
              name={field}
              checked={formFields[field]}
              onChange={handleCheckboxChange}
            />
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
        ))}
      </div>
      <button className="create-button" onClick={handleCreateForm}>
        Create Form
      </button>
        </div>
      {/* Conditionally render the DynamicForm only after "Create Form" is clicked */}
      {schema && <SimpleDynamicForm schema={schema} />}
      {/* {schema && <DynamicForm schema={schema} />} */}
    </div>
  );
};

export default CreateForm;
