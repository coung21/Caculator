import React, { useState, useRef } from 'react';
import Button from './Button';

function Caculator() {
  const inputValue = useRef();

  function display(numbers) {
    inputValue.current.value += numbers;
  }
  function clearAll() {
    inputValue.current.value = ''
  }

  function delNumber() {
    inputValue.current.value = inputValue.current.value.slice(0,-1)
  }

  function calculate() {
    try {
      inputValue.current.value = eval(inputValue.current.value)
    } catch {
      inputValue.current.value = "ERROR"
    }
  }

  return (
    <div className='bg-[#212521] shadow-xl p-4 rounded-md grid grid-cols-four gap-2 mb-auto mt-auto'>
      <input
        type='text'
        ref={inputValue}
        placeholder='0'
        className='col-span-4 outline-none bg-[#212521] font-mplus2 font-bold text-3xl h-20 text-end text-white p-3 my-3'
      />
      <Button isOperator={true} onClick={clearAll}>AC</Button>
      <Button isOperator={true} onClick={delNumber}>C</Button>
      <Button isOperator={true} onClick={display.bind(null, '%')}>%</Button>
      <Button isOperator={true} onClick={display.bind(null, '/')}>/</Button>
      <Button onClick={display.bind(null, '7')}>7</Button>
      <Button onClick={display.bind(null, '8')}>8</Button>
      <Button onClick={display.bind(null, '9')}>9</Button>
      <Button isOperator={true} onClick={display.bind(null, '*')}>x</Button>
      <Button onClick={display.bind(null, '4')}>4</Button>
      <Button onClick={display.bind(null, '5')}>5</Button>
      <Button onClick={display.bind(null, '6')}>6</Button>
      <Button isOperator={true} onClick={display.bind(null, '-')}>-</Button>
      <Button onClick={display.bind(null, '1')}>1</Button>
      <Button onClick={display.bind(null, '2')}>2</Button>
      <Button onClick={display.bind(null, '3')}>3</Button>
      <Button isOperator={true} onClick={display.bind(null, '+')}>+</Button>
      <Button onClick={display.bind(null, '0')}>0</Button>
      <Button onClick={display.bind(null, '.')}>.</Button>
      <Button onClick={display.bind(null, '00')}>00</Button>
      <Button isOperator={true} onClick={calculate}>=</Button>
    </div>
  );
}

export default Caculator;
