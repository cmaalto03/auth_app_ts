"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var config = {
    port: Number(process.env.PORT) || 3000,
};
exports.default = config;
