var exec = require("child_process").exec;
function start(response) {
    console.log("Request handler 'start' was called.");
    var content = "empty";

    exec("find/",
        function (error, stdout, stderr) {

            content = stdout;
            console.log("content is "+content);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Hello World ssssss");
            response.write(content);
            response.end();
        }
    );
}

function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World ");
    response.write("Hello Upload");
    response.end();
}

exports.start = start;
exports.upload = upload;