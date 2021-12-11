import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { unslugify } from "../../../utils/unslugify";

export default async function assetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const keyboardByID = await prisma.keyboard.findMany({
          where: {
            OR: [
              { id: `${req.query.id}` },
              { name: `${unslugify(req.query.id)}` },
            ],
          },
          include: {
            keycaps: true,
          },
        });
        res.status(200).json(keyboardByID);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching keyboards", message: e });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
