var https = require('https');                               

let getHTML = require('./http-functions');

var requestOptions3 = {
    host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
}

function printLowerCase (html){
    console.log(html.toLowerCase())
}
getHTML(requestOptions3, printLowerCase, https)