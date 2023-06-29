// Nothing really to test here...   ...This tdd is for javascript
// For JSX stuff I will use a different ( outside ) mechanism for tdd
// 
const { verdict, statuses } = require('./common.js');
function statusesTest() { 
    const expected = [
        'LOADING',
        'IDLE',
        'LOAD',
        'READY'
    ]
    let isOk = true 
    expected.forEach((key)=> {
        if ( ! statuses.hasOwnProperty(key)) {
            isOk = false 
        }
    })
    const n = Object.keys( statuses).length 
    if ( n !== expected.length ) {
        isOk = false 
    }
    verdict(isOk, true, "statusesTest" )
}
if (!module.parent) {
    statusesTest() 
}
