import React from 'react';
import './avatar.css';
import '../tokens/tokens-dark.css';
import '../tokens/tokens-light.css';
import '../fonts.css';

export type AvatarProps = {
  label: string;
  image: boolean;
  size: 'small' | 'medium' | 'large' | 'xl' | 'two-xl' | 'three-xl' | 'four-xl' | 'five-xl';
  onClick: () => void;
};

const Avatar: React.FC<AvatarProps> = ({ label, image, size, onClick, }) => {
  // Split the label into words
  const words = label.split(' ');

  // Get the first letter of the first word, if it exists
  const firstWordFirstLetter = words.length > 0 ? words[0].charAt(0) : '';

    // Get the first letter of the second word, if it exists
    const secondWordFirstLetter = words.length > 1 ? words[1].charAt(0) : '';

  return (
    <div className={`avatar avatar-${size}`} onClick={onClick}>
      {image ? (
        <img className="avatar-image" src="path/to/image.jpg" alt="Avatar" />
      ) : (
        <span className='avatar-monogram'>
          {firstWordFirstLetter}
          {secondWordFirstLetter}
        </span>
      )}
    </div>
  );
};

export default Avatar;