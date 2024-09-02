import React from 'react';

interface CheckboxProps {
  type?:string;
  id?:string;
  name?:string;
  value?:string;
  label?:string;
  className?:string;

}

const Checkbox: React.FC<CheckboxProps> = ({
     type,
     id,
     name,
     value,
     className

    
    }) => {
  return (
    <input   
   type={type}
   id={id}
   name={name}
   value={value}
   className={className}
   />

  );
};

export default Checkbox;
