let dash = require("edaw-dash");

let { sort } = dash

const numbers = [9,2,3,0,5,4]

const sortedNumbers = sort(numbers)

test('should return sorted array of numbers', () => {
  expect(sortedNumbers).toEqual([0,2,3,4,5,9]);
 });