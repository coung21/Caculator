import React from 'react';

function Button(props) {
  return (
    <button
      className={`w-14 h-14 text-white bg-[#282b34] rounded-full text-center font-medium text-lg ${props.isOperator && 'text-orange-500'}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
