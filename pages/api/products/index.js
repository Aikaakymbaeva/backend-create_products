import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
  if (request.method === "POST") {
    // send joke with POST fetch/request.
    const productData = request.body;
    // use jokeData to create joke in Database
    await Product.create(productData);
    return response.status(201).json({ status: "Yup! Product created!" });
  }
}
