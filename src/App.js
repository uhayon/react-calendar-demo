import React from 'react';
import { getMonthWeeks } from './utils/calendar';

function App() {
  console.log(getMonthWeeks({ year: 2019, month: 2 }));
  return (
    <div>Hola</div>
  );
}

export default App;
