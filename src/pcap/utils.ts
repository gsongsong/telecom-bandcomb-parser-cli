import { ContainedValue, SimpleValue } from "./types";

export function c<T>(obj: ContainedValue<T>) {
  return Object.values(obj)[0];
}

export function v(obj: SimpleValue) {
  return Object.keys(obj)[0];
}
