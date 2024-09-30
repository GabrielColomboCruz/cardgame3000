import { NextApiRequest, NextApiResponse } from "next";
import DeckCRUD from "@/model/DeckCRUD"; // Adjust the path as needed

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { operation, Id, Nome, CartaImg, ContaId } = req.body;

  try {
    const result = await DeckCRUD(operation, Id, Nome, CartaImg, ContaId);
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}
