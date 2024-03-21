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
const obj2 = structuredClone(obj);

obj2.prop3.prop31 = 'prop-new';

console.log(obj);
console.log(obj2);
