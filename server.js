const constants = require('./constants');

let intervalId = 0;
const requests = [];
const timeout = 100;

const runResponse = () => {
    const res = requests.shift();
    if (res) {
        res.statusCode = 200;
        res.end();
    } else {
        clearInterval(intervalId);
        intervalId = 0;
    }
}

const server = constants.http.createServer((req, res) => {
    console.log('>>> got request, timestamp =  ', new Date().getTime())
    requests.push(res);
    if (!intervalId) {
        intervalId = setInterval(runResponse, timeout);
    }
});
server.listen(constants.port, constants.hostname, () => {
    console.log(`Server is running at http://${constants.hostname}:${constants.port}`);
});
