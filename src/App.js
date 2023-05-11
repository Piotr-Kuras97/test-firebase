import './App.css';
import { useState } from 'react';
import { createData } from './databaseConfig'


function App() {
  const [value, setValue] = useState("")

  return (
    <div className="App">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={() => createData(value)}>Wyślij wiadomość</button>
    </div>
  );
}

export default App;
