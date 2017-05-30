
let result = process.argv.slice(2).reduce( (acc, current) => acc + (+current), +0);

console.log(result);
