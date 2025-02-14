function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct behavior
  }
  if (a === 0) {
    return b; // Correct behavior
  }
  if (b === 0) {
    return a; // Correct behavior
  }

  // The bug is here!  This will cause an infinite recursion if a and b are negative numbers
  return foo(a - 1, b - 1);
}