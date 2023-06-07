import React from 'react';

const Name = ({ first, last }) => {
  return (
    <div>
      <span>{first}</span> <span>{last}</span>
    </div>
  );
};

export default Name;