// I thought I would need a bunch of different externnal scripts so 
// I built this out to be pretty robust...   
// ...In hindsight this and useCDNResource.jsx are overkill... 

import useCDNResource from './useCDNResource.jsx'
import { useState, useEffect } from 'react';
import { statuses } from './common.js';


export function useLoadAllScripts() {
    function getIsReady() {
        return ready
    }
    const adobedtmUrl = "https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js";
    const launchUrl = "https://assets.adobedtm.com/7a84fdea953b/aca65f0ced29/launch-183d8bb9556f-development.min.js"
    let statusii = {
        adobedtmUrl : useCDNResource(adobedtmUrl),
        launchUrl : useCDNResource(launchUrl)
    } 

    const [ready, setReady] = useState(false)    
    useEffect(() => {
        let isOk = true 
        for ( let k in statusii ) { 
            if ( statusii[k] !== statuses.READY) {
                isOk = false 
            }
        }
        setReady(isOk)
    }, [statusii]);

    return {getIsReady};
}
export default useLoadAllScripts;