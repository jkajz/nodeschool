var inputs = process.argv.slice(2);
var result = inputs.map(x => x.slice(0, 1)).reduce((prev, curr) => (prev + curr));

console.log(`[${inputs}] becomes "${result}"`);
