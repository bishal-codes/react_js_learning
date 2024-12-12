// variables - let, const, var

const { aw } = require("vitest/dist/chunks/reporters.C_zwCd4j.js");

// let - block scope
let a = 1;
let name = "Bishal";

// let can be reassigned
name = "Bijay";

// const - block scope
const b = 2;
const myName = "Bishal";

console.log(a, name);

// const can't be reassigned
// myName = "Bijay"; // Error - Assignment to constant variable.

// var - function scope
var c = 3;
var myFullName = "Bishal Karki";

// hoisting
console.log(d); // undefined
var d = 4;

// console.log(e); // Error - Cannot access 'e' before initialization
let e = 5;

// console.log(abc); // not defined

// falsy values - false, 0, "", null, undefined, NaN
// truthy values - true, 1, " ", [], {}

// ternary operator - condition ? exprIfTrue : exprIfFalse
let age = 18;
let isAdult = age >= 18 ? "Adult" : "Not Adult";
console.log(isAdult);

// for loop
// - for(initialization; condition; increment/decrement) {}

const user = {
  name: "Bishal",
  age: 20,
  profession: "Developer",
  skills: ["HTML", "CSS", "JS"],
};

// destructuring
const { name: userName, age: userAge, profession, skills } = user;
console.log(userName, userAge, profession, skills);

const users = [
  { name: "Bishal", age: 20 },
  { name: "Bijay", age: 22 },
  { name: "Bikash", age: 24 },
];

// destructuring
const [user1, user2, user3] = users;
console.log(user1, user2, user3);

// users?.forEach // optional chaining
users.forEach((user) => {
  console.log(user.name, user.age);
});

let numbers = [1, 2, 3, 4, 5];

function addingOne(numbers) {
  let newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    let newNumber = numbers[i] + 1;
    newNumbers.push(newNumber);

    // let newNumber = numbers[i] + 1;
    // newNumbers = [...newNumbers, newNumber];
  }
  return newNumbers;
}

console.log(addingOne(numbers));

const fruits = ["Apple", "Banana", "Mango"];

// before map
function getFruit(fruit) {
  return fruit;
}

const fruitNames = fruits.map(getFruit);
console.log(fruitNames);

// map
const fruitNames2 = fruits.map((fruit) => fruit);

function sum(a, b) {
  console.log(a + b);
  return a + b;
}

function memoize(fn) {
  let cache = {};

  function memoizeFn(...args) {
    const key = JSON.stringify(args);
    console.log(key);

    if (cache[key] !== undefined) {
      console.log("From cache");
      console.log(cache[key]);
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;

    console.log("From function");
    console.log(result);
    // return result;
  }

  console.log(memoizeFn(1, 2));
}

memoize(sum(1, 2));

const cancellable = (fn, args, t) => {
  console.log(fn, args, t);
  console.log(fn(...args));

  let IntervalCall = setInterval(() => {
    console.log(fn(...args));
  }, t);

  const cancelFn = (cancelTimeMs) => {
    setTimeout(() => {
      clearInterval(IntervalCall);
    }, cancelTimeMs);
  };

  return cancelFn;
};

const cancel = cancellable(sum, [1, 2], 1000);

cancel(5000);

// spread operator - to copy array or object or to merge array or object
const fruits1 = ["Apple", "Banana"];
const fruits2 = ["Mango", "Orange"];

const allFruits = [...fruits1, ...fruits2];

// rest operator - to get remaining elements
const [first, ...rest] = allFruits;

// template literals - string interpolation - `${}`
const message = `Hello, ${name}`;
console.log(message); // Hello, Bishal

// null coalescing operator - ??
// only works for null or undefined values, not for 0, "", false, NaN
let userAge2 = null;
let age2 = userAge2 ?? 18;
console.log(age2); // 18

// promise - async - object that represents the eventual completion or failure of an asynchronous operation
// - pending, fulfilled, rejected
// - then, catch, finally
// - async, await

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
    [];
  });

async function getValue() {
  // always use try-catch block with async-await
  try {
    const res = await promise; // await can only be used inside async function. this gives the resolved value of the promise
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

getValue();

const players = ["Bishal", "Bijay", "Bikash", "Bibek", "Bishnu"];

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunked = arr.slice(i, i + size);
    chunkedArr.push(chunked);
  }
  return chunkedArr;
};

console.log(chunkArray(players, 2)); // [["Bishal", "Bijay"], ["Bikash", "Bibek"], ["Bishnu"]]
