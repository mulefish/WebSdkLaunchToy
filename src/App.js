import useLoadAllScripts from './cndResources/useInjectAllScripts.jsx';
import Links from './links.jsx';
import React from 'react';
import { statuses } from './common.js';
import { useState, useEffect } from 'react';
import ExampleUsage from './docs/exampleUsage.jsx';

const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';

function App() {
  const [textareaValue, setTextareaValue] = useState('');
  const [storedValue, setStoredValue] = useState('');
  const [hasLoadedEverything, setHasLoadedEverything] = useState('nope');
  const handleTextareaChange = (event) => {
    const value = event.target.value;
    setTextareaValue(value);
  };

  const updateLocalStorage = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, textareaValue);
  };

  useEffect(() => {
    setStoredValue(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedValue) {
      setTextareaValue(storedValue);
    } else {
    }
  }, [storedValue]);

  const allScripts = useLoadAllScripts();

  useEffect(() => {
    if (allScripts.getIsReady() === true) {
      setHasLoadedEverything(statuses.READY);
    }
  }, [allScripts.getIsReady()]);
  const doSatellite = () => {
    console.log(' hasLoadedEverything=' + hasLoadedEverything);
    try {
      eval(`_satellite.track("lam", { "goat":"penny"       })`);
      console.log('DO THIS!!');
    } catch (failbot) {
      console.log(failbot);
    }
  };
  return (
    <div>
      {hasLoadedEverything}
      <br />
      <Links />
      <hr></hr>
      <button onClick={() => updateLocalStorage()}>update localstorage</button>
      <hr></hr>
      <textarea
        rows="10"
        cols="100"
        defaultValue={textareaValue}
        onChange={handleTextareaChange}
      />
      <br></br>
      <button onClick={() => doSatellite()}>
        satellite - First time takes some time - check the console
      </button>

      <hr></hr>
      <ExampleUsage />
    </div>
  );
}
export default App;
