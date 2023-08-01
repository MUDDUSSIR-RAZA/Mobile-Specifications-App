import { getAll, getByModel } from "@/services/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { productModel } = req.query;
    // console.log(productModel);
    const product = getByModel(productModel);
    // console.log(product);
    return res.status(200).json(product);
  }
  return res.status(400).send();
}
