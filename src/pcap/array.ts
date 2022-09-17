import { parseBlock } from "./block";
import { Line } from "./line";
import { Capabilities } from "./types";

export function isArray(line: string) {
  return (
    line.includes(":") && (line.endsWith("items") || line.endsWith("item"))
  );
}

export function parseArray(
  lines: Line[],
  capabilities: Capabilities
): unknown[] {
  const items = [];
  let start = lines.findIndex((line) => line.line.startsWith("Item"));
  while (start !== -1) {
    const next = lines.findIndex(
      (line, index) =>
        line.line.startsWith("Item") &&
        line.indentation === lines[start].indentation &&
        index > start
    );
    const end = next === -1 ? lines.length : next;
    const linesPerBlock = lines.slice(start + 1, end);
    items.push(parseBlock(linesPerBlock, capabilities));
    start = next;
  }
  return items;
}
