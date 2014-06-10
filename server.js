var http = require("http");
var url = require("url");
function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        // url.parse(request.url).pathname is the web address.
        console.log("Request for " + pathname + " received.");
        //    route(handle, pathname);
        route(handle, pathname,response);

    }
    http.createServer(onRequest).listen(3003);
    console.log("Server has started.");
}

exports.start = start;