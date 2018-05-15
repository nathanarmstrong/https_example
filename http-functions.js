module.exports = function getHTML (options, callback, https) {
    https.get(options, function(response){
        response.on("data", function(data){
            callback(data.toString())
        })
    })
}