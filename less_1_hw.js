function sum(a, b, c) {
    const isToBind = b === undefined && c === undefined || b !== undefined && c !== undefined;
    const isEmpty = a === undefined && b === undefined && c === undefined;

    return isEmpty ? 0 : (!isToBind ? a : sum.bind(null, a + (c === undefined ? 0 : c), 0));

}

console.log(sum());
console.log(sum(1)(2)(3)());