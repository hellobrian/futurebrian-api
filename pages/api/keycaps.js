import prisma from "../../lib/prisma";

export default async function assetHandler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const keyboards = await prisma.keycap.findMany();
        res.status(200).json(keyboards);
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
