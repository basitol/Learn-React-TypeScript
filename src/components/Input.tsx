import React from "react";

type InputProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input = ({ value, handleChange }: InputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};

export default Input;
