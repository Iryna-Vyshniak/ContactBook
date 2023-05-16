import React from 'react';

const Footer = () => {
  return (
    <div>
      <p>
        Created by
        <a href="https://github.com/Iryna-Vyshniak"> &copy; Iryna V-N </a>{' '}
        {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
