import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function assetHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const keycaps = await prisma.keycap.findMany({
          include: {
            keyboards: true,
            layouts: true,
          },
        });
        res.status(200).json(keycaps);
      } catch (e) {
        console.error("Request error", e);
        res.status(500).json({ error: "Error fetching keycaps", message: e });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
