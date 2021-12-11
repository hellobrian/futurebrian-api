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
        const keycap = await prisma.keycap.findMany({
          where: {
            OR: [
              { id: `${req.query.id}` },
              { name: `${unslugify(req.query.id)}` },
            ],
          },
          include: {
            keyboards: true,
            layouts: true,
          },
        });
        res.status(200).json(keycap);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching keycaps", message: e });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
