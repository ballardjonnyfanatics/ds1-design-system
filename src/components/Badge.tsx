import React from 'react';
import './badge.css';
import '../tokens/tokens-dark.css';
import '../tokens/tokens-light.css';
import '../fonts.css';

export type BadgeProps = {
  variant: 'primary' | 'primary-inverse' | 'transparent' | 'accent' | 'positive' | 'positive-subtle' | 'warning' | 'warning-subtle' | 'negative' | 'negative-subtle';
  icon?: boolean;
  label: string;
};

const Badge: React.FC<BadgeProps> = ({ variant, icon, label }) => {
  return (
    <span className={`badge badge-${variant}`}>
      {icon && <span className="badge-icon">🔔</span>}
      {label}
    </span>
  );
};

export default Badge;