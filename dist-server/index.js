"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//Set static folder
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
const Port = process.env.Port || 5000;
app.listen(Port, () => console.log(`server started on port ${Port}`));
