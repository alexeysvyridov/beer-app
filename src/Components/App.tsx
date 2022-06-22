import * as React from 'react';
import AppRouter from './AppRouter';

function App(): JSX.Element {
  return (
    <div className="App">
      <AppRouter />
      <div id="modal-root"></div>
    </div>
  );
}

export default App;
