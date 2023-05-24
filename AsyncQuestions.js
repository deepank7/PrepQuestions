// Implement a function that takes a list of async functions as input and executes them in a series that is one at a time.
// The next task isexecuted only when the previous task is completed

const asyncSeriesExecuter = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

const asyncTask = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];
asyncSeriesExecuter(promises);
