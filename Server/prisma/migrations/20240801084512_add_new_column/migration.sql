/*
  Warnings:

  - Added the required column `username` to the `Resource` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resource" ADD COLUMN     "username" TEXT NOT NULL;
