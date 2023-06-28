import React, { useState, useEffect } from 'react';

export const useLogic = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 3);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 3);
  };

  return { count, increment, decrement };
};
export default useLogic;

// const needed=[
//   //"https://googleads.g.doubleclick.net",
//   //"https://adservice.google.com/ddm"
//   ////"dpm.demdex.net",
//   ////"https://shop.lululemon.com/api/analytics/adobe/b/ss/",
//   ////"https://www.google.com/pagea",
//   ////"https://adservice.google.com/ddm"
//   // 'api/analytics/adobe/b/ss/'
//   'goat_dino_penny
//   ]
//   let found = []

//   function sleep(ms) {
//       return new Promise(resolve => setTimeout(resolve, ms));
//   }

//   function getCalls() {
//       const x = window.performance.getEntriesByType('resource').map((entry) => {
//           let foundIt = false
//           needed.forEach((thing)=> {
//             if ( entry.name.includes(thing)) {

//               found.push(entry.name)
//               foundIt = true
//               }
//           })
//           if (  foundIt == true) {
//             console.error("YAY " + entry.name )
//           }
//           return {
//               url: entry.name,
//               http: entry.response ? entry.response.status : null
//           }
//       });
//       return x
//   }

//   async function main(ms) {
//       await sleep(ms);
//       const collection = getCalls()
//       return collection
//   }
//   const x = await main(15000)

//   let isOk = false
//   // TODO! Need a better rule to determine success!
//   if ( found.length >= needed.length ) {
//     isOk = true
//   } else {
//   console.error("found " + found.length + "  needed " + needed.length + "   isOk " + isOk )
//   }
//   return isOk
