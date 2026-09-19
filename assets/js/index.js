function pow(base, exponent) {
  if (
    typeof base !== "number" ||
    !Number.isInteger(exponent) ||
    Number.isNaN(base) ||
    Number.isNaN(exponent)
  ) {
    throw new TypeError(
      "The base must be number and the exponent must be integer.",
    );
  }
  if (exponent > 1000 || exponent < -1000) {
    throw new RangeError("The indicator value exceeds the allowable limit.");
  }
  if (exponent === 0) {
    return 1;
  }
  if (exponent > 0) {
    return base * pow(base, exponent - 1);
  }
  if (exponent < 0) {
    return 1 / pow(base, -exponent);
  }
}
try {
  console.log(pow(3, -4));
  console.log(pow(3, 3.5));
  console.log(pow("hdcu", 3));
  console.log(pow("jdbu", 3));
} catch (err) {
  console.log(err);
}
try {
  console.log(pow(1, 1001));
} catch (err) {
  console.log(err);
}
try {
  console.log(pow(1, 1));
} catch (err) {
  console.log(err);
}

// function emailValidation(email) {
//   if (typeof email !== "string" || !email.includes("@")) {
//     throw new TypeError("Email must be a string and contain @.");
//   }
//   if (email.startsWith("@") || email.endsWith("@")) {
//     throw new RangeError("@ must not be the first or the last.");
//   }
//   return email;
// }
// try {
//   console.log(emailValidation("hbuefgr"));
// } catch (err) {
//   console.log(err);
// }
// try {
//   console.log(emailValidation("hbuefgr@"));
// } catch (err) {
//   console.log(err);
// }
// try {
//   console.log(emailValidation("hbuefgr@bcdj"));
// } catch (err) {
//   console.log(err);
// }
