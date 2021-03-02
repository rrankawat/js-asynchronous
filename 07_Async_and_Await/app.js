// Without Async & Await
// function myFunc() {
//   return "Hello";
// }

// console.log(myFunc());

// With Async & Await
// async function myFunc() {
//   return "Hello";
// }

// myFunc().then((res) => console.log(res));

// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   const error = false;

//   if (!error) {
//     const res = await promise; // Wait until promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("Something went wrong"));
//   }
// }

// myFunc()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function getUsers() {
  // await response of the fetch call
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");

  // Only proceed once its resolved
  const data = await res.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then((users) => console.log(users));
