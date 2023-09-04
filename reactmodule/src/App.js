import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Используем хук useState для хранения текущей даты
  const [currentDate, setCurrentDate] = useState(new Date());

  // Используем хук useEffect для обновления текущей даты каждую секунду
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    // Чтобы избежать утечки памяти, очищаем интервал при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  return React.createElement(
    'div',
    { className: 'App' },
    React.createElement(
      'header',
      { className: 'App-header' },
      React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
      React.createElement(
        'p',
        null,
        'Edit ',
        React.createElement('code', null, 'src/App.js'),
        ' and save to reload.',
      ),
      React.createElement(
        'a',
        {
          className: 'App-link',
          href: 'https://reactjs.org',
          target: '_blank',
          rel: 'noopener noreferrer',
        },
        'Learn React',
      ),
      React.createElement(
        'div',
        { className: 'data' },
        'Current Date: ', currentDate.toString()
      )
    ),
  );
}

export default App;
