import prisma from "../../../lib/prisma";

export default async function assetHandler(req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const keyboards = await prisma.keyboard.findMany({
          include: {
            keycaps: true,
          },
        });
        res.status(200).json(keyboards);
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
