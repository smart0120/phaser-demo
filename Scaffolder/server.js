var r = [ "fs", "http", "mime", "path", "url" ];
for (var i = 0; i < r.length; i++) {
    global[r[i]] = require(r[i]);
}
var exec = require('child_process').exec
// some constants
var k = {
    "port": 9998,
    "dir": "../src/game/"
};

// the main thing
var server = http.createServer( function(request, response) {

    // extract the pathname from the request URL
    var pathname = url.parse(request.url).pathname;

    // add the home directory, /public or whatever
    var filename = path.join(process.cwd(), k.dir, pathname);


    // does this path exist?
    fs.exists(filename, function(gotPath) {

        // no, bail out
        if (!gotPath) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found");
            response.end();
            return;
        }
        response.writeHead(200, {
            'Content-Type': 'application/js',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        });


;
        let s = `"C:\\Program Files\\JetBrains\\WebStorm 2021.3.3\\bin\\webstorm64.exe" "${filename}"`;
        exec(s, function callback(error, stdout, stderr) {
            // result
            console.log(stdout)
            console.log(stderr)
            console.log(Error)
        });
        response.end()

        //

    });
});

// fire it up
server.listen(k.port);
