"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const block_1 = require("./block");
const line_1 = require("./line");
function parse(content) {
    const lines = (0, line_1.normalize)(content);
    const capabilities = {};
    (0, block_1.parseBlock)(lines, capabilities);
    return capabilities;
}
exports.parse = parse;
//# sourceMappingURL=index.js.map