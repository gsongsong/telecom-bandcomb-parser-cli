"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArray = exports.isArray = void 0;
const block_1 = require("./block");
function isArray(line) {
    return (line.includes(":") && (line.endsWith("items") || line.endsWith("item")));
}
exports.isArray = isArray;
function parseArray(lines, capabilities) {
    const items = [];
    let start = lines.findIndex((line) => line.line.startsWith("Item"));
    while (start !== -1) {
        const next = lines.findIndex((line, index) => line.line.startsWith("Item") &&
            line.indentation === lines[start].indentation &&
            index > start);
        const end = next === -1 ? lines.length : next;
        const linesPerBlock = lines.slice(start + 1, end);
        items.push((0, block_1.parseBlock)(linesPerBlock, capabilities));
        start = next;
    }
    return items;
}
exports.parseArray = parseArray;
//# sourceMappingURL=array.js.map