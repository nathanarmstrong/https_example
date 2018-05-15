const https = require('https');

const options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
};

const callback = function(response) {
    console.log('In response handler callback!');

    response.on('data', function(chunk){
        console.log('[-- Chunk of Length ' + chunk.length + ' --]');
        console.log(chunk.toString());
    })
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");