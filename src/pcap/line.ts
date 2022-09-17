export type Line = {
  line: string;
  indentation: number;
};

export function getKeyValue(line: string): [string, string | undefined] {
  const index = line.indexOf(":");
  if (index === -1) {
    return [line, undefined];
  }
  const key = line.substring(0, index);
  const value = line.substring(index + 1).trim();
  return [key, value];
}

export function normalize(content: string) {
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
