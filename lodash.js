const _ = require('lodash') //importing lodash module

//provides a lot of utility functions

const items = [1, [2, [3,[4]]]]
const newItems = _.flattenDeep(items) //flattens the array [1,2,3,4]
console.log(newItems)