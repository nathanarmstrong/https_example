const https = require('https');

const options = {
    host: 'www.example.org',
    path: '/'
};

const callback = function() {
    console.log('In response handler callback!');
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");