// Problem adding Two promises

// Description:
// You are given two promises, promise1 and promise2, that resolve to numbers. Write an asynchronous function addPromises that waits for both promises to resolve and returns the sum of the resolved values.
//Because the funcion is prefixed with async the value which is returned will be wrapped inside a promise
// async function addPromises(promise1, promise2) {
//     const [result1, result2] = await Promise.all([promise1, promise2]);
//     return result1 + result2;
// }

async function addPromises(promise1, promise2) {
  let val1 = await promise1;
  let val2 = await promise2;
  return new Promise((resolve) => {
    resolve(val1 + val2);
  });
}

//Problem promise time limit

// Description:
// You are given a promise promise and a time limit in milliseconds timeLimit. Write an asynchronous function withTimeLimit that returns a new promise. This new promise should resolve with the same value as the original promise if it resolves within the specified time limit. If the original promise does not resolve within the time limit, the new promise should reject with the string "Time Limit Exceeded".
// async function withTimeLimit(promise, timeLimit) {
//     return new Promise((resolve, reject) => {
//         const timer = setTimeout(() => {
//             reject("Time Limit Exceeded");
//         }, timeLimit);

//         promise.then((value) => {
//             clearTimeout(timer);
//             resolve(value);
//         }).catch((error) => {
//             clearTimeout(timer);
//             reject(error);
//         });
//     });
// }
 function withTimeLimit(fn, timeLimit) {
  return async function (...args) {
    return new Promise(async (resolve, reject) => {
      let id = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, timeLimit);
      try {
        let res = await fn(...args);
        resolve(res);
      } catch (error) {
        reject(error);
      } finally {
        clearTimeout(id);
      }
    });
  };
}
