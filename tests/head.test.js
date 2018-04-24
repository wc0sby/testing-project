let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const firstItem = head(names)

test('should return the first name of the array',()=>{
  expect(firstItem).toBe('Jon')
})
