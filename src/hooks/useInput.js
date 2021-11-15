import { useState } from "react";
export const useInput = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const onChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const onReset = () => setValues(initialValues);
  return [values, onChange, onReset];
};
