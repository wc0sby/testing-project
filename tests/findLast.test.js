let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const findLastItem = findLast(names)

test('should return the last item of the array',()=>{
  expect(findLastItem).toBe('Axe')
})