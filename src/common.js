function verdict(a, b, msg) {
    if (JSON.stringify(a) === JSON.stringify(b)) {
      console.log('PASS ' + msg);
      return true;
    } else {
      console.log('FAIL ' + msg);
      return false;
    }
  }
  
  function blue(msg) {
    console.log(`%c ${msg}`, 'background:lightblue');
  }
  function pink(msg) {
    console.log(`%c ${msg}`, 'background:pink');
  }
  
  function green(msg) {
    console.log(`%c ${msg}`, 'background:lightgreen');
  }
  
  module.exports = {
    verdict,
    blue,
    green,
    pink,
  };
  