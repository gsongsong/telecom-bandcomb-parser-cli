"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = exports.getKeyValue = void 0;
function getKeyValue(line) {
    const index = line.indexOf(":");
    if (index === -1) {
        return [line, undefined];
    }
    const key = line.substring(0, index);
    const value = line.substring(index + 1).trim();
    return [key, value];
}
exports.getKeyValue = getKeyValue;
function normalize(content) {
    return content
        .split("\n")
        .filter((line) => !!line.trim())
        .map((line) => line.trimEnd())
        .map((line) => {
        const lineTrimmed = line.trimStart();
        const indentation = line.length - lineTrimmed.length;
        return {
            line: lineTrimmed,
            indentation,
        };
    });
}
exports.normalize = normalize;
//# sourceMappingURL=line.js.map