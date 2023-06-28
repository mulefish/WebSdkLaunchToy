
import React from 'react';
import { LoadScript } from 'react-load-script';

function Launch() {
  const handleScriptLoad = () => {
  };

  return (
    <div>
      <h1>My Component</h1>
      <LoadScript
        url="https://third-party-script-url.com/script.js"
        onLoad={handleScriptLoad}
      />
    </div>
  );
} 
export default Launch;
// import Script from 'next/script';

// function Launch() {
//   const host = 'https://dxa4wb90x7ize.cloudfront.net/stage/';
//   const version = 'latest';

//   return (
//     <div>
//       <Script
//         src="https://assets.adobedtm.com/7a84fdea953b/09aece6f582f/launch-e6cc9ebc113b-development.min.js"
//         strategy="beforeInteractive"
//         async
//       />
//       <Script
//         src={`${host}transformation-configs/${version}/transformation-configs-remoteEntry.js?time=${Date.now()}`}
//         strategy="beforeInteractive"
//         defer
//         async
//       />
//       <Script
//         src={`${host}validation-configs/${version}/validation-configs-remoteEntry.js?time=${Date.now()}`}
//         strategy="beforeInteractive"
//         defer
//         async
//       />
//       <Script
//         src={`${host}lam-model/${version}/lam-model-remoteEntry.js?time=${Date.now()}`}
//         strategy="beforeInteractive"
//         defer
//         async
//       />
//       <Script
//         src={`${host}experiment-module/${version}/experiment-module-remoteEntry.js?time=${Date.now()}`}
//         strategy="beforeInteractive"
//         defer
//         async
//       />
//       <Script
//         src={`${host}%40lululemon/mwa-analytics/latest/browser/mwa-analytics.js?time=${Date.now()}`}
//         async
//         defer
//         strategy="beforeInteractive"
//       />
//       All done
//     </div>
//   );
// }


