"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObject = void 0;
const block_1 = require("./block");
function parseObject(lines, capabilities) {
    const obj = {};
    if (lines.length === 0) {
        return obj;
    }
    const indentation = lines[0].indentation;
    let start = lines.findIndex((line) => line.indentation === indentation);
    while (start !== -1) {
        const next = lines.findIndex((line, index) => line.indentation === indentation && index > start);
        const end = next === -1 ? lines.length : next;
        const linesPerBlock = lines.slice(start, end);
        Object.assign(obj, (0, block_1.parseBlock)(linesPerBlock, capabilities));
        start = next;
    }
    return obj;
}
exports.parseObject = parseObject;
//# sourceMappingURL=object.js.map