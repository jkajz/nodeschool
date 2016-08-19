module.exports = function makeImportant(str, num = str.length) {
    return str + "!".repeat(num);
};
