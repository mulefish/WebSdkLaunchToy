import useLoadAllScripts from './useLoadAllScripts.jsx'; 
import Links from './links.jsx';
import React from 'react';
import { statuses } from './common.js';
import { useState, useEffect } from 'react';
const LOCAL_STORAGE_KEY = 'LOCAL_STORAGE_KEY';

function App() {
    const [textareaValue, setTextareaValue] = useState('');
    const [storedValue, setStoredValue] = useState('');
    const [hasLoadedEverything, setHasLoadedEverything] = useState("nope")
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

    const allScripts = useLoadAllScripts() 

    useEffect(()=>{
        if ( allScripts.getIsReady() === true ) { 
            setHasLoadedEverything( statuses.READY)
        }
    }, [allScripts.getIsReady()]) 

    return (
        <div>
            { hasLoadedEverything }
            <br/>
            <Links />
            <hr></hr>
            <button onClick={() => updateLocalStorage()}>update localstorage</button>
            <hr></hr>
            <textarea
                rows="10"
                cols="20"
                value={textareaValue}
                onChange={handleTextareaChange}
            />
        </div>
    );
}

export default App;
