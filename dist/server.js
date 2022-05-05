"use strict";
exports.__esModule = true;
var express = require('express');
var express_1 = require("express");
var app = express();
var route = (0, express_1.Router)();
app.use(express.json());
route.get('/', function (req, res) {
    res.json({ message: 'hello word with Typescripy' });
});
app.use(route);
app.listen(5000, function () { return 'Servidor funcionando na port 5000'; });
//# sourceMappingURL=server.js.map