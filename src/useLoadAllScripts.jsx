// import useExternalScript from './useExternalScript.js'
import useCDNResource from './useCDNResource.jsx'
import { useState, useEffect } from 'react';

export function useLoadAllScripts() {
    function getIsReady() { 
        return ready
    }
    const adobedtmUrl = "https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js"
    const adobedtmStatus = useCDNResource(adobedtmUrl)
    const [ready, setReady] = useState(false)    
    useEffect(() => {
        if ( adobedtmStatus === "ready" ) {
            setReady(true)
        }
    }, [adobedtmStatus]);
    return {getIsReady };
}

export default useLoadAllScripts;
