import React from 'react';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};