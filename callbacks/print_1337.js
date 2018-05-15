var https = require('https');                               

let getHTML = require('./http-functions');

var requestOptions3 = {
    host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
}
var numberLetters = {
    "a" : '4',
    "e" : '3',
    "l" : '1',
    "o" : '0',
    "s" : '5',
    "t" : '7',
    'ck' : 'x',
    'er' : '0r',
    'you' : 'j00'
}

function print1337 (html){
    html = html.replace(/ck/gi, numberLetters.ck)
    html = html.replace(/er/gi, numberLetters.er)
    html = html.replace(/you/gi, numberLetters.you)
    html = html.replace(/a/gi, numberLetters.a)
    html = html.replace(/e/gi, numberLetters.e)
    html = html.replace(/l/gi, numberLetters.l)
    html = html.replace(/o/gi, numberLetters.o)
    html = html.replace(/s/gi, numberLetters.s)
    html = html.replace(/t/gi, numberLetters.t)
    console.log(html)
}
getHTML(requestOptions3, print1337, https)