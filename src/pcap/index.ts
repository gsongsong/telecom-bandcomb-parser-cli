import { parseBlock } from "./block";
import { normalize } from "./line";

export function parse(content: string) {
  const lines = normalize(content);
  const capabilities = {};
  parseBlock(lines, capabilities);
  console.log(capabilities);
}
