// functions
const add = (a: number, b: number) => {
  if (Math.random() > 0.5) {
    return a + b;
  }
};
// if function is promise
const res = add(1, 2);
const promise = new Promise((resolve, reject) => {
  resolve(res);
});

// Index signatures
interface IIndex {
  [key: string]: string;
}
const obj: IIndex = {
  key: "value",
  key2: "value2",
};

const phones: {
  [key: string]: { name: string; price: number } | undefined;
} = {
  iphone: { name: "iphone", price: 1000 },
  samsung: { name: "samsung", price: 900 },
};

// for known keys
const iphoneDetails = phones.iphone;

// for unknown keys
console.log(phones["iphone"]);
