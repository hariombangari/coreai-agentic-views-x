import React, { useState } from 'react';
import type { InputSchema } from '../types';


interface FormInputProps {
  schema: InputSchema;
  onSubmit: (values: Record<string, string>) => void;
}

const FormInput: React.FC<FormInputProps> = ({ schema, onSubmit }) => {
  const schemaProperties = schema.properties;
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleChange = (fieldName: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-lg mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
      {Object.entries(schemaProperties).map(([fieldName, field]) => (
        <div key={fieldName} className="space-y-2">
          <label 
            htmlFor={fieldName}
            className="block text-base font-semibold text-gray-800 mb-1"
          >
            {field.title || fieldName}
          </label>
          <input
            type={field.type === 'string' ? 'text' : field.type}
            id={fieldName}
            name={fieldName}
            value={formValues[fieldName] || ''}
            onChange={(e) => handleChange(fieldName, e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 bg-gray-50 px-5 py-3 text-base shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:bg-white transition"
          />
          <p className="text-sm text-gray-500 mb-2">{field.description}</p>
        </div>
      ))}
      <button
        type="submit"
        className="w-full flex justify-center py-3 px-6 rounded-lg shadow-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default FormInput;
