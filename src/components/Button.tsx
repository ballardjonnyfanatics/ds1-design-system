import React from 'react';
import './button.css';
import '../tokens/tokens-dark.css';
import '../tokens/tokens-light.css';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent' | 'negative';
  size?: 'large' | 'medium' | 'small' | 'extra-small';
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', size = 'medium', onClick }) => {
  return (
    <button className={`btn btn-${variant} btn-${size}`} onClick={onClick}>
      {label}
    </button>
  );
};