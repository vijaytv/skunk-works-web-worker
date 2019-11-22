import React, {useState, useEffect} from 'react';
import './App.css';
import myWorker from './test.worker';

function App() {
  const [counter, setCounter] = useState([0]);
  const worker = new myWorker();
  useEffect(() => {
    worker.postMessage(counter);
  },[])
  worker.addEventListener('message', event => setCounter(event.data[0]));
  return (
    <div className="App">
      <pre>
        {JSON.stringify(counter, null, 2)}
      </pre>
    </div>
  );
}

export default App;
