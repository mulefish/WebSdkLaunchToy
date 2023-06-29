function ExampleUsage() {


    const page = `<html>
<head>
<script src="https://assets.adobedtm.com/7a84fdea953b/aca65f0ced29/launch-183d8bb9556f-development.min.js" async></script>
</head>
<body>
<script>
  function fireLAMDirectCallEvent() {
    try {
      window._satellite.track("lam", { "goat": "penny" })
      alert("It worked! Check the network tab!")
    } catch (boom) {
      alert("oh no " + boom)
    }
  }
</script>
<button onclick="fireLAMDirectCallEvent()">fireLAMDirectCallEvent</button>
</body>
</html>    
`

    const alloy = `import { useState, useEffect } from 'react';  
import { createInstance } from "@adobe/alloy";
const alloy = createInstance({ name: "alloy" });
let tripped = false
function AdobeSDKThing() {
  const dev = "9b1ca63f-d529-49e0-b0bc-6d3e3e8ec83e:dev" 
  const [configure, setConfigure] = useState({
    "edgeConfigId": dev,
    "orgId": "A92B3BC75245B1030A490D4D@AdobeOrg"
  });
  useEffect(() => {
    if (tripped === false) {
      alloy("configure", configure);  
    }
    tripped = true
  }, [configure])
     
  const sendSomeEvent = async (event) => {
    try {
      alloy("sendEvent", {
        "xdm": {
          "web": {
            "webInteraction": {
              "linkClicks": {
                "value": 1
              },
              "name": "My Custom Link", // Name that shows up in the custom links report
              "URL": "https://myurl.com", // The URL of the link
              "type": "other" // values: other, download, exit
            }
          }
        }
      });
    } catch (boom) {
      console.log("OH NO!\n" + boom)
    }
  }
  return (
    <div>
      <button onClick={() => sendSomeEvent()}>sendSomeEvent</button>
    </div>
    );
}
export default AdobeSDKThing;
`


    return (
        <div>
            <fieldset>
                <legend>CDN style</legend>
                <textarea rows="20" cols="110">
                    {page}
                </textarea>
            </fieldset>
            <fieldset>
                <legend>Alloy React</legend>
                <textarea rows="45" cols="110">
                    {alloy}
                </textarea>
            </fieldset>
        </div>

    )



}
export default ExampleUsage;