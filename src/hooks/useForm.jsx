const { useState } = require('react');

export const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const reset = () => {
    setFormData({});
  };

  return {
    formData,
    handleInputChange,
    reset
  };
};
