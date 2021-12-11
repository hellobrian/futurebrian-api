/*
  Warnings:

  - You are about to drop the column `layouts` on the `Keyboard` table. All the data in the column will be lost.
  - Added the required column `layout` to the `Keyboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Keyboard` DROP COLUMN `layouts`,
    ADD COLUMN `layout` ENUM('alice', 'arisu', 'full', 'hhkb', 'seventy_five', 'sixty', 'sixty_five', 'tkl') NOT NULL;

-- CreateTable
CREATE TABLE `KeyboardLayout` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` ENUM('alice', 'arisu', 'full', 'hhkb', 'seventy_five', 'sixty', 'sixty_five', 'tkl') NOT NULL,
    `keycapId` INTEGER NULL,

    UNIQUE INDEX `KeyboardLayout_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
