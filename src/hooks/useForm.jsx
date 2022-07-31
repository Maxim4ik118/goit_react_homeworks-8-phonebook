const { useState } = require('react');

export const useForm = () => {
  const [formData, setFormData] = useState({});

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
