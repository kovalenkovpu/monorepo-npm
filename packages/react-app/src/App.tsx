import logo from './logo.svg';
import './App.css';

import { Button } from '@monorepo-npm/react-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
          <Button buttonType="primary" onClick={() => {}}>Learn React</Button>
      </header>
    </div>
  );
}

export default App;
