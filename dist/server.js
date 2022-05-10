"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var express_2 = require("express");
var app = (0, express_1["default"])();
var prisma = new client_1.PrismaClient();
var route = (0, express_2.Router)();
app.use(express_1["default"].json());
route.get('/', function (req, res) {
    res.json({ message: 'Olá mundo, esse é meu primeiro app Typescript' });
});
app.use(route);
app.listen(5000, function () { return 'Servidor funcionando na port 5000'; });
//# sourceMappingURL=server.js.map