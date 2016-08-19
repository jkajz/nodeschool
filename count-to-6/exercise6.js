module.exports = function average(...args){
    var sum = args.reduce((acc, curr) => (acc + curr));
    return sum/args.length;
};
