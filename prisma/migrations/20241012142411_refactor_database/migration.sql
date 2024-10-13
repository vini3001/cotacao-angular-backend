/*
  Warnings:

  - You are about to drop the column `COIN_TYPE` on the `cotacao` table. All the data in the column will be lost.
  - You are about to alter the column `DATE_REGISTER` on the `cotacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `DATE_APURATION` to the `cotacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DOLAR_TYPE` to the `cotacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EURO_TYPE` to the `cotacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PESOS_TYPE` to the `cotacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cotacao` DROP COLUMN `COIN_TYPE`,
    ADD COLUMN `DATE_APURATION` DATETIME NOT NULL,
    ADD COLUMN `DOLAR_TYPE` VARCHAR(10) NOT NULL,
    ADD COLUMN `EURO_TYPE` VARCHAR(10) NOT NULL,
    ADD COLUMN `PESOS_TYPE` VARCHAR(10) NOT NULL,
    MODIFY `DATE_REGISTER` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
