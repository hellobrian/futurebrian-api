import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "lib/prisma";
import { unslugify } from "utils/unslugify";

interface Request extends NextApiRequest {
  query: {
    id: string;
  };
}

export default async function assetHandler(req: Request, res: NextApiResponse) {
  const {
    method,
    query: { id },
  } = req;

  switch (method) {
    case "GET":
      try {
        const keyboardByID = await prisma.keyboard.findMany({
          where: {
            OR: [{ id }, { name: unslugify(id) }],
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
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
