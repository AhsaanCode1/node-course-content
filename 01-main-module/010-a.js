//. means from the point of the current __filename
require ("./b.js")   // will get the context/or console logs, and print's them first
// before coming here, we already have console.log(from b.js & c.js)
console.log("loading module a")

for (let i = 0; i < 100000000; i ++);

console.log("end module a")

/**
 * "loading module c"
 *  "end of module c"
 * "loading module b"
 * "end module b"
 * "loading module a"
 * "end module a"
 * 
 * 
 */