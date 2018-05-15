var https = require('https');                               

let getHTML = require('./http-functions');

var requestOptions3 = {
    host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
}

function printReverse (html){
    var string = html.split('');
    var reverse = string.reverse();
    console.log(reverse.join(''));
}
getHTML(requestOptions3, printReverse, https)