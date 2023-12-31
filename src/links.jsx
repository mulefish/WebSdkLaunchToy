import * as React from 'react';

function Links() {
  return (
    <span>
      <a
        target="_blank"
        href="https://stackblitz.com/edit/stackblitz-starters-f3pua2?file=README.md,src%2Flinks.jsx,src%2FApp.js"
      >
        stackblizt
      </a>
      &nbsp;{' '}
      <a
        target="_blank"
        href="https://github.com/mulefish/WebSdkLaunchToy"
        target="_blank"
      >
        WebSdkLaunchToy
      </a>
      &nbsp;{' '}
      <a target="_blank" href="https://github.com/adobe/alloy">
        Adobe Alloy ( npm run build - npm run dev )
      </a>
      &nbsp;{' '}
      <a
        target="_blank"
        href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/3248884892/Setup+Mechanism+to+Read+LAM+and+send+to+WebSDK+in+Launch+-+DATASE-379+and+426"
      >
        confluence ( pictures)
      </a>
      <a
        target="_blank"
        href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/3235746045/Understand+Document+how+Adobe+Edge+Works+-+DATASE+394"
      >
        confluence article 2
      </a>
    </span>
  );
}

export default Links;
