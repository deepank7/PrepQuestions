// Write a program to deeply compare two arrays or objects.

// Convert to a string and compare
let a = { a: 1, b: 2, c: 3 };
let b = { a: 1, b: 2, c: 3 };

console.log(JSON.stringify(a) === JSON.stringify(b));

// For nested objects we need to have a deeper comparision
const deepEqual = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    // get the values
    const val1 = object1[key];
    const val2 = object2[key];

    // if both values are objects
    const areObjects =
      val1 && typeof val1 === "object" && val2 && typeof val2 === "object";

    if (areObjects) {
      // deep check again
      if (!deepEqual(val1, val2)) {
        return false;
      }
    }
    // if are not objects
    // compare the values
    else if (!areObjects && val1 !== val2) {
      return false;
    }
  }

  return true;
};
