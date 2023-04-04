import React from 'react';
import Container from './components/Container';
import Caculator from './components/Caculator';

function App() {
  return (
    <div className='App'>
      <Container>
        <Caculator />
        <p className='text-lg'>
          {' '}
          &lt;/&gt; by{' '}
          <a
            className='text-md text-blue-800 underline font-medium'
            href='https://github.com/coung21'
          >
            coung21
          </a> {' '}
          <span className='text-red-700 text-lg'>♥</span>
        </p>
      </Container>
    </div>
  );
}

export default App;
