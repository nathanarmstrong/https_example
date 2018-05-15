var https = require('https');                               

function getAndPrintHTMLChunks(){

    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };
    https.get(requestOptions, function(response){
        response.setEncoding('utf8');

        response.on('data', function (data) {
            console.log( data);
        });
    });
}

function getAndPrintHTML(){
    let str = "";
    const requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    https.get(requestOptions, function(response){
        response.setEncoding('utf8');

        response.on('data', function(data){
            let test = data.split(/\n(.+)/)
            for(i = 15; i < 28; i++){
                str += test[i];
            }
        });

        response.on('end', function() {
            console.log(str)
        })
    });

}

function getAndPrintHTML2 (options){
    https.get(options, function(response){
        response.on("data", function(data){
            console.log(data.toString())
        })
    });


}

let requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};


// getAndPrintHTMLChunks()
// getAndPrintHTML()
getAndPrintHTML2(requestOptions)