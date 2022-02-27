var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");

app = express();
app.use(serveStatic(__dirname + "/design-system/storybook-static"));

var port = process.env.PORT || 5000;
app.listen(port);
