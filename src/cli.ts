#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import { argv } from "process";
import { parse } from "./pcap";
import { parseFeatureSets as parseEutraFeatureSets } from "./pcap/parsers/eutra";
import {
  parseFeatureSetCombinations,
  parseSupportedBandCombinationList,
} from "./pcap/parsers/mrdc";
import { parseFeatureSets as parseNrFeatureSets } from "./pcap/parsers/nr";

if (require.main === module) {
  const filepath = argv[2];
  const content = readFileSync(filepath, "utf8");
  const { eutra, mrdc, nr } = parse(content);

  const suffix = new Date().getTime();
  const filename = `capabilities-${suffix}.csv`;
  const lines: (string | number)[][] = [];

  const eutraFeatureSets = eutra ? parseEutraFeatureSets(eutra) : undefined;
  if (eutraFeatureSets) {
    const {
      featureSetsDl,
      featureSetsDlPerCc,
      featureSetsUl,
      featureSetsUlPerCc,
    } = eutraFeatureSets;

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
    ? parseSupportedBandCombinationList(mrdc)
    : undefined;
  if (mrdcSupportedBandCombinationList) {
    buildTableWrapper(mrdcSupportedBandCombinationList, lines, {
      title: "MR-DC supported band combination list",
      indexName: "Index",
    });
  }

  const mrdcFeatureSetCombinations = mrdc
    ? parseFeatureSetCombinations(mrdc)
    : undefined;
  if (mrdcFeatureSetCombinations) {
    buildTableWrapper(mrdcFeatureSetCombinations, lines, {
      title: "MR-DC feature set combinations",
      indexName: "ID",
    });
  }

  const nrFeatureSets = nr ? parseNrFeatureSets(nr) : undefined;
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
  writeFileSync(filename, tableString);

  console.log(`Written to ${filename}`);
}

function buildTableWrapper(
  objList: Object[],
  lines: (string | number)[][],
  {
    title,
    indexName,
    indexOffset,
  }: {
    title: string;
    indexName: string;
    indexOffset?: number;
  }
) {
  lines.push([title]);
  const objListKeys = getKeys(objList);
  lines.push([indexName, ...objListKeys]);
  buildTable(objList, objListKeys, lines, indexOffset ?? 0);
  lines.push([]);
}

function buildTable(
  objList: Object[],
  keys: string[],
  lines: (string | number)[][],
  indexOffset: number = 0
) {
  objList.forEach((obj: any, index) => {
    const line: (string | number)[] = [index + indexOffset];
    keys.forEach((key) => {
      const value = obj[key]
        ? `"${JSON.stringify(obj[key])}"`.replace(/""/g, '"')
        : "";
      line.push(value);
    });
    lines.push(line);
  });
}

function getKeys(objList: Object[]) {
  return Array.from(new Set(objList.map(Object.keys).flat()));
}
