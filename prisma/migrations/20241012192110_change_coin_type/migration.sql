/*
  Warnings:

  - You are about to drop the column `DOLAR_TYPE` on the `cotacao` table. All the data in the column will be lost.
  - You are about to drop the column `EURO_TYPE` on the `cotacao` table. All the data in the column will be lost.
  - You are about to drop the column `PESOS_TYPE` on the `cotacao` table. All the data in the column will be lost.
  - You are about to alter the column `DATE_REGISTER` on the `cotacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - You are about to alter the column `DATE_APURATION` on the `cotacao` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `DOLAR_VALUE` to the `cotacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `EURO_VALUE` to the `cotacao` table without a default value. This is not possible if the table is not empty.
  - Added the required column `PESOS_VALUE` to the `cotacao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cotacao` DROP COLUMN `DOLAR_TYPE`,
    DROP COLUMN `EURO_TYPE`,
    DROP COLUMN `PESOS_TYPE`,
    ADD COLUMN `DOLAR_VALUE` FLOAT NOT NULL,
    ADD COLUMN `EURO_VALUE` FLOAT NOT NULL,
    ADD COLUMN `PESOS_VALUE` FLOAT NOT NULL,
    MODIFY `DATE_REGISTER` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `DATE_APURATION` DATETIME NOT NULL;
