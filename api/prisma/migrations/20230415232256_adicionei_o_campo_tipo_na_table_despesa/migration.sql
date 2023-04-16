/*
  Warnings:

  - You are about to drop the `DespesasPagas` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Despesa" ADD COLUMN "tipo" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "DespesasPagas";
PRAGMA foreign_keys=on;
