import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "specs.json");

export function getAll() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getProductById(id) {
  const data = getAll();
  return data.find((p) => p[""] === id);
}
