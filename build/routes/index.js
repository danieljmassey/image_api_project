"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
const isValidDimension = (input) => {
    if (parseInt(input) > 0) {
        return true;
    }
    else {
        return false;
    }
};
const StatusNames = ['pending', 'cancelled', 'successful', 'declined'];
const isValidStatus = (input) => typeof input === 'string' && StatusNames.includes(input);
const isValidFile = (input) => {
    return typeof input === 'string' && ImageNames.includes(input);
};
route.get('/', (req, res) => {
    res.send(req.query);
});
exports.default = route;
