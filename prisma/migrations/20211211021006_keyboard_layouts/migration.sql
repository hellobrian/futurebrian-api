/*
  Warnings:

  - Added the required column `layouts` to the `Keyboard` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Keyboard` ADD COLUMN `layouts` ENUM('hhkb', 'tkl', 'alice', 'arisu') NOT NULL;
