function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < 0 || b < 0) {
    return -1; // or throw an error: throw new Error("Inputs must be non-negative");
  }
  return foo(a - 1, b - 1);
}
//Test Cases
console.log(foo(5, 2)); // Output: 3
console.log(foo(0, 5)); //Output: 5
console.log(foo(5, 0)); //Output: 5
console.log(foo(0, 0)); //Output: 0
console.log(foo(-2,-3)); //Output: -1