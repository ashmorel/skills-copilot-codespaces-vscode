// Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];
var server = http.createServer(function (req, res) {
    // Parse the request URL
    var urlObj = url.parse(req.url, true);
    var pathName = urlObj.pathname;
    // Route the request
    switch (pathName) {
        case '/':
            // Read the comments.html file
            fs.readFile('./comments.html', function (err, data) {
                if (err) {
                    console.error(err);
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                }
            });
            break;
        case '/comments':
            // Handle the comment
            var comment = urlObj.query;
            comments.push(comment);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(JSON.stringify(comments));
            break;
        default:
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page not found');
            break;
    }
});
server.listen(3000, function () {
    console.log('Server is running on http://localhost:3000');
});