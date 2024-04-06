import React from 'react';

const MenuItem = ({title, onSidebarItemClick}) => {
  return (
    <div>
        <button id='buttonMenu' onClick={() => onSidebarItemClick(title)}> {title} </button>
    </div>
    
  );
};

export default MenuItem;