/*
  Warnings:

  - You are about to alter the column `title` on the `Project` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(15)`.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "title" SET DATA TYPE VARCHAR(15);
