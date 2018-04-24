let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const reverseArray = reverse(names)

test('should reverse the array',()=>{
  expect(reverseArray).toEqual(["Axe","Saul","Robin","Lilly","Barney","Ted","Bob","Jon"])
})
