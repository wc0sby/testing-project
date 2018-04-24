let dash = require("edaw-dash");

let { filter, find, map, head, tail, reverse, findLast } = dash

const names = ["Jon","Bob","Ted","Barney","Lilly","Robin","Saul","Axe"];

const onlyThreeLetters=(name)=>{
 return name.length === 3;
}
const helloArray = filter(names,onlyThreeLetters);

test('filter finds all names with 3 letters', () => {
 expect(helloArray).toEqual(["Jon","Bob","Ted","Axe"]);
});





