var express = require('express');
var Data = express();
Data.get('/', function (requset, response) {
 response.write("hello world");
 response.end();
});
Data.listen(3000);
