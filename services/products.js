import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "specs.json");

export function getAll() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

export function getByModel(model) {
  const data = getAll();
  console.log(
    data.find((p) => {
      console.log(p.Model);
      console.log(model);
      return p.Model === model;
    })
  );
}
