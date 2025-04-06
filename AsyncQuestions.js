// Implement a function that takes a list of async functions as input and executes them in a series that is one at a time.
// The next task isexecuted only when the previous task is completed

// Approach 1: Using async await
const asyncSeriesExecuter1 = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

const asyncTask1 = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};
const promises1 = [
  asyncTask1(3),
  asyncTask1(1),
  asyncTask1(7),
  asyncTask1(2),
  asyncTask1(5),
];
asyncSeriesExecuter1(promises1);


// Approach 2: Using recursion
const asyncSeriesExecuter2 = function (promises) {
  // get the top task
  let promise = promises.shift();

  promise.then((data) => {
    //print the result
    console.log(data);

    //recursively call the same function
    if (promises.length > 0) {
      asyncSeriesExecuter(promises);
    }
  });
};

const asyncTask2 = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};
const promises2 = [
  asyncTask2(3),
  asyncTask2(1),
  asyncTask2(7),
  asyncTask2(2),
  asyncTask2(5),
];
asyncSeriesExecuter2(promises2);
