import React from 'react';
import './avatar.css';

export type AvatarProps = {
  label: string;
  authenticated: boolean;
  image: boolean;
};

const Avatar: React.FC<AvatarProps> = ({ label, authenticated, image }) => {
  return (
    <div className="avatar">
      {image ? (
        <img className="avatar-image" src="path/to/image.jpg" alt="Avatar" />
      ) : (
        <div className="avatar-placeholder">{label.charAt(0)}</div>
      )}
      <div className="avatar-info">
        <span className="avatar-label">{label}</span>
        {authenticated && <span className="avatar-authenticated">✔</span>}
      </div>
    </div>
  );
};

export default Avatar;