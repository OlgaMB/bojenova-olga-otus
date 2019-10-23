const constants = require('./constants');

const request = (number, async = true) => {
    let i = 0;
    const count = async ? number : 1;
    const runRequest = () => {
        i++;
        const req = constants.http.get({hostname: constants.hostname, port: constants.port}, res => {
            console.log('<<< got response, timestamp = ', new Date().getTime())
            count === 1 && i < number && runRequest();
        });

        req.on('error', error => {
            console.log(error);
        });

        req.end();
    }

    console.log(`Type of processing is ${async ? "parallel" : "sequenced"}, number of requests is ${number}`);

    while (i < count) {
        runRequest();
    }
}

request(3, false);
