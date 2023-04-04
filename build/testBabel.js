"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.get('/', function (req, res) {
  res.status(200).send("welcome to the home page");
});
app.listen(3003, function () {
  console.log("server is running on port http://localhost:3003");
});