import * as React from 'react';

function Links() {
  return (
    <span>
      <a href="https://stackblitz.com/edit/stackblitz-starters-81up6h?description=A%20create-react-app%20project%20based%20on%20react%20and%20react-dom&file=src%2FApp.js&title=React%20Starter">
        stackblizt
      </a>
      &nbsp;{' '}
      <a
        href="https://github.com/mulefish/WebSdkLaunchToy"
        target="_blank"
      >
        WebSdkLaunchToy
      </a>
      &nbsp;{' '}
      <a href="https://lululemon.atlassian.net/wiki/spaces/DCP/pages/3235746045/Understand+Document+how+Adobe+Edge+Works+-+DATASE+394">
        confluence
      </a>
      &nbsp;{' '}

      <a href="https://github.com/adobe/alloy">
        Adobe Alloy (  Note: npm run build - npm run dev )
      </a>


    </span>
  );
}

export default Links;
