// spread ...
// rest ...

arr = [1, 3, 4];
arr2 = [6, 7, 8];

console.log([...arr, ...arr2]); //spread

function test(...arr) {
  //rest

  [arr];
}

// test([...arr])
