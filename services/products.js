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

export function getNav() {
  const data = getAll();
  const uniqueBrandsSet = new Set();
  const navNames = [];

  data.forEach((p) => {
    if (!uniqueBrandsSet.has(p.Brand)) {
      uniqueBrandsSet.add(p.Brand);
      navNames.push({ key: p.Brand });
    }
  });

  return navNames;
}
