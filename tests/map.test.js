let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const addHello = map(names,(name)=> `Hello ${name}`)

test('should map the array and add hello to the beginning of each name',()=>{
  expect(addHello).toEqual(["Hello Jon","Hello Bob","Hello Ted","Hello Barney","Hello Lilly","Hello Robin","Hello Saul","Hello Axe"])
})
