import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const KeyboardLayoutsEnum = [
  "alice",
  "arisu",
  "full",
  "hhkb",
  "seventy_five",
  "sixty",
  "sixty_five",
  "tkl",
];

export function getKeyboardLayouts() {
  return KeyboardLayoutsEnum.map((layoutName) => {
    return {
      name: layoutName,
    };
  });
}

async function seed() {
  await Promise.all(
    getKeyboardLayouts().map((layout) => {
      return db.keyboardLayout.create({ data: layout });
    })
  );
}

seed();
