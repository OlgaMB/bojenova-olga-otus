const fn1 = () => Promise.resolve(1);
const fn2 = () => new Promise(resolve => {
    setTimeout(() => resolve(2), 1000)
})


function promiseReduce(asyncFunctions, reduce, initialValue) {
    return Promise.allSettled(asyncFunctions.map(fn => fn()))
        .then(results => {
            let reduceResult = initialValue;
            results.forEach(result => reduceResult = (result.status === 'fulfilled') ? reduce(reduceResult, result.value) : reduceResult)
            return reduceResult;
        });
}

promiseReduce([fn1, fn2], (memo, value) => memo * value, 2).then(console.log);

