import { useState } from "react";

export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onChange, reset, setValue];
};

export const useSelect = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, onChange, reset];
};