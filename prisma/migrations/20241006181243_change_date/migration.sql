/*
  Warnings:

  - You are about to alter the column `DATE_REGISTER` on the `cotacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `cotacao` MODIFY `DATE_REGISTER` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
