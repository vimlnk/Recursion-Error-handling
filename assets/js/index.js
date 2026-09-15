function pow(base, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    throw new TypeError("The base and the exponent must be numbers.");
  }
  if (exponent > 1000) {
    throw new RangeError("The indicator value exceeds the allowable limit.");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * pow(base, exponent - 1);
}
try {
  console.log(pow(3, 3));
  console.log(pow("jdbu", 3))
} catch (err) {
  console.log(err);
}
try{
  console.log(pow(1, 1001));
}catch(err){
  console.log(err);
}
console.log(pow(1,1));
