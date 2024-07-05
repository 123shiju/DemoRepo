function test(callback) {
  console.log(callback);
  console.log("this is parent fucntion");
}

function test2(callback2) {
  console.log("haii this callbackfunction");
}

function test3(callback4) {
  console.log("bakkc");
}

test(test2());
