const fn1 = () => Promise.resolve(1)
const fn2 = () => new Promise(resolve => {
    setTimeout(() => resolve(2), 1000)
})

async function promiseReduce(asyncFunctions, reduce, initialValue) {
    let reduceResult = initialValue;
    for (let fn of asyncFunctions) {
        try {
            reduceResult = reduce(reduceResult, await fn());
        } catch(e){}
    }
    return reduceResult;
}

promiseReduce([fn1, fn2], (memo, value) => memo * value, 2).then(console.log);

