import { readFileSync } from "fs";
import { argv } from "process";
import { parse } from "./pcap";

const filepath = argv[2];
const content = readFileSync(filepath, "utf8");
const parsed = parse(content);
