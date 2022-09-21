#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const process_1 = require("process");
const pcap_1 = require("./pcap");
const eutra_1 = require("./pcap/parsers/eutra");
const mrdc_1 = require("./pcap/parsers/mrdc");
const nr_1 = require("./pcap/parsers/nr");
if (require.main === module) {
    const filepath = process_1.argv[2];
    const content = (0, fs_1.readFileSync)(filepath, "utf8");
    const { eutra, mrdc, nr } = (0, pcap_1.parse)(content);
    const suffix = new Date().getTime();
    const filename = `capabilities-${suffix}.csv`;
    const lines = [];
    const eutraFeatureSets = eutra ? (0, eutra_1.parseFeatureSets)(eutra) : undefined;
    if (eutraFeatureSets) {
        const { featureSetsDl, featureSetsDlPerCc, featureSetsUl, featureSetsUlPerCc, } = eutraFeatureSets;
        buildTableWrapper(featureSetsDl, lines, {
            title: "E-UTRA feature sets (DL)",
            indexName: "ID",
            indexOffset: 1,
        });
        buildTableWrapper(featureSetsDlPerCc, lines, {
            title: "E-UTRA feature sets per CC (DL)",
            indexName: "ID",
        });
        buildTableWrapper(featureSetsUl, lines, {
            title: "E-UTRA feature sets (UL)",
            indexName: "ID",
            indexOffset: 1,
        });
        buildTableWrapper(featureSetsUlPerCc, lines, {
            title: "E-UTRA feature sets per CC (UL)",
            indexName: "ID",
        });
    }
    const mrdcSupportedBandCombinationList = mrdc
        ? (0, mrdc_1.parseSupportedBandCombinationList)(mrdc)
        : undefined;
    if (mrdcSupportedBandCombinationList) {
        buildTableWrapper(mrdcSupportedBandCombinationList, lines, {
            title: "MR-DC supported band combination list",
            indexName: "Index",
        });
    }
    const mrdcFeatureSetCombinations = mrdc
        ? (0, mrdc_1.parseFeatureSetCombinations)(mrdc)
        : undefined;
    if (mrdcFeatureSetCombinations) {
        buildTableWrapper(mrdcFeatureSetCombinations, lines, {
            title: "MR-DC feature set combinations",
            indexName: "ID",
        });
    }
    const nrFeatureSets = nr ? (0, nr_1.parseFeatureSets)(nr) : undefined;
    if (nrFeatureSets) {
        const { featureSetsDownlink, featureSetsUplink } = nrFeatureSets;
        buildTableWrapper(featureSetsDownlink, lines, {
            title: "NR feature sets (DL)",
            indexName: "ID",
            indexOffset: 1,
        });
        buildTableWrapper(featureSetsUplink, lines, {
            title: "NR feature sets (UL)",
            indexName: "ID",
            indexOffset: 1,
        });
    }
    const tableString = lines.map((line) => line.join(",")).join("\n");
    (0, fs_1.writeFileSync)(filename, tableString);
    console.log(`Written to ${filename}`);
}
function buildTableWrapper(objList, lines, { title, indexName, indexOffset, }) {
    lines.push([title]);
    const objListKeys = getKeys(objList);
    lines.push([indexName, ...objListKeys]);
    buildTable(objList, objListKeys, lines, indexOffset !== null && indexOffset !== void 0 ? indexOffset : 0);
    lines.push([]);
}
function buildTable(objList, keys, lines, indexOffset = 0) {
    objList.forEach((obj, index) => {
        const line = [index + indexOffset];
        keys.forEach((key) => {
            const value = obj[key]
                ? `"${JSON.stringify(obj[key])}"`.replace(/""/g, '"')
                : "";
            line.push(value);
        });
        lines.push(line);
    });
}
function getKeys(objList) {
    return Array.from(new Set(objList.map(Object.keys).flat()));
}
//# sourceMappingURL=cli.js.map