import { parseBlock } from "./block";
import { normalize } from "./line";
import { Capabilities } from "./types/capabilities";

export function parse(content: string) {
  const lines = normalize(content);
  const capabilities: Capabilities = {};
  parseBlock(lines, capabilities);
  console.log(capabilities);
}
