let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const lastName = tail(names)

test('should returns the name array without the first item',()=>{
  expect(lastName).toEqual(["Bob","Ted","Barney","Lilly","Robin","Saul","Axe"])
})
