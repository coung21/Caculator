import React from 'react';

function Container({ children }) {
  return <div className='flex flex-col justify-center items-center h-screen'>
    {children}
  </div>;
}

export default Container;
