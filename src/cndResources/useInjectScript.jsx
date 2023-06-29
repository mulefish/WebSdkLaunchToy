// Inject scripts into the page. 
// Honestly? It is weird that React doesn't have some sort of built-in 
// hook to deal with this.

import { useEffect, useState } from 'react';
import { statuses } from '../common.js';

export const useCDNResource = (url) => {
    const [state, setState] = useState(url ? statuses.LOADING : statuses.IDLE);

    useEffect(() => {
        if (!url) {
            setState(statuses.IDLE);
            return;
        }

        let script = document.querySelector(`script[src="${url}"]`);

        const handleScript = (e) => {
            setState(e.type === statuses.LOAD ? statuses.READY : statuses.ERROR);
        };

        if (!script) {
            script = document.createElement("script");
            script.type = "application/javascript";
            script.src = url;
            script.async = true;
            document.body.appendChild(script);
            script.addEventListener(statuses.LOAD, handleScript);
            script.addEventListener(statuses.ERROR, handleScript);
        }

        script.addEventListener(statuses.LOAD, handleScript);
        script.addEventListener(statuses.ERROR, handleScript);

        return () => {
            script.removeEventListener(statuses.LOAD, handleScript);
            script.removeEventListener(statuses.ERROR, handleScript);
        };
    }, [url]);

    return state;
};
export default useCDNResource;