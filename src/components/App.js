import React from 'react';

import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CalendarHeader />
      <CalendarBody />
    </div>
  );
}

export default App;
