"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBlock = void 0;
const array_1 = require("./array");
const constants_1 = require("./constants");
const line_1 = require("./line");
const object_1 = require("./object");
function parseBlock(lines, capabilities) {
    if (!lines.length) {
        return {};
    }
    const { line } = lines[0];
    const [key, value] = (0, line_1.getKeyValue)(line);
    if ((0, array_1.isArray)(line)) {
        const items = (0, array_1.parseArray)(lines.slice(1), capabilities);
        return { [key]: items };
    }
    else {
        const items = (0, object_1.parseObject)(lines.slice(1), capabilities);
        if (key === constants_1.UE_EUTRA_CAPABILITY) {
            capabilities.eutra = items;
        }
        if (key === constants_1.UE_MRDC_CAPABILITY) {
            capabilities.mrdc = items;
        }
        if (key === constants_1.UE_NR_CAPABILITY) {
            capabilities.nr = items;
        }
        if (value === undefined) {
            return { [key]: items };
        }
        return { [key]: { [value]: items } };
    }
}
exports.parseBlock = parseBlock;
//# sourceMappingURL=block.js.map