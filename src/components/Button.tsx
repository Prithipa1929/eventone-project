import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  className?: string; 
  type?:"button";
  text?:string;
 
}

const Button: React.FC<ButtonProps> = ({
      onClick, className ,text,type}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      type={type}>{text}</button>
  );
};

export default Button;
