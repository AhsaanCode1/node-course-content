
require ("./c.js") // before loading this module, we go to next module

console.log("loading module b")

for (let i = 0; i < 1_000_000_000; i ++);

console.log("end module b")

// from here we will get
/**
 * "loading module c"
 *  "end of module c"
 * "loading module b"
 * "end module b"
 * 
 * 
 */


