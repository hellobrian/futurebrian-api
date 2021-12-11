/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Keyboard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Keycap` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Keyboard_name_key` ON `Keyboard`(`name`);

-- CreateIndex
CREATE UNIQUE INDEX `Keycap_name_key` ON `Keycap`(`name`);
