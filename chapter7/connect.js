var connect = require('connect');
var http = require('http');

var app = connect();

function profile(request, response)
{
  console.log("profile visited");
}

app.use('/profile', profile);

http.createServer(app).listen(8000);
console.log("server is running");
