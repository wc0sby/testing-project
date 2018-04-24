let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const findTed = find(names,(name)=> name === 'Ted')

test('find Ted in the array',()=>{
  expect(findTed).toBe('Ted')
})
