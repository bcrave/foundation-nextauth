/*
  Warnings:

  - You are about to drop the column `userId` on the `Organization` table. All the data in the column will be lost.
  - Added the required column `orgId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Organization" DROP CONSTRAINT "Organization_userId_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "orgId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Organization" DROP COLUMN "userId",
ADD COLUMN     "ownerId" TEXT;

-- AddForeignKey
ALTER TABLE "Organization" ADD CONSTRAINT "Organization_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
