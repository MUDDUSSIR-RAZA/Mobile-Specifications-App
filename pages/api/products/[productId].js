import { getProductById } from "@/services/products";

export default function handler(req, res) {
  if (req.method === "GET") {
    const { productId } = req.query;
    const product = getProductById(productId);
    return res.status(200).json(product);
  }
  return res.status(400).send();
}
