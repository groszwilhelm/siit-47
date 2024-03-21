const obj = {
  prop1: 'prop1',
  prop2: 'prop2',
  prop3: {
    prop31: 'prop31'
  },
  prop4: [1, 2, 3]
}

// Reference to obj.
// const obj2 = obj;
// const obj2 = structuredClone(obj);

// obj2.prop3.prop31 = 'prop-new';

// console.log(obj);
// console.log(obj2);

const list = [
  'Hello',
  'World',
]

const newList = list
  .filter((item) => item !== 'Hello')
  .map((item) => `${item} <3`);

console.log(list);
console.log(newList);

// Always use .map when you need to transform a list of things into another list of things
// Always use for / forEach when you only want to iterate over the values but not change them.

const arr = [];

for (const item of [1, 2]) {
  arr.push(item * 2)
}

console.log(arr);

const newArr = [1, 2].map((item) => item * 2);
