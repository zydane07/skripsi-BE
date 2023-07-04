-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('Pria', 'Wanita');

-- CreateEnum
CREATE TYPE "Job" AS ENUM ('Pelajar', 'Mahasiswa', 'Jobseekers', 'Lainnya');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "job" "Job" NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Work" (
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,
    "competence" TEXT[],

    CONSTRAINT "Work_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "TalentInterest" (
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "example" TEXT[],

    CONSTRAINT "TalentInterest_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "Rule" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "workCode" TEXT NOT NULL,
    "talentInterestCode" TEXT NOT NULL,

    CONSTRAINT "Rule_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_workCode_fkey" FOREIGN KEY ("workCode") REFERENCES "Work"("code") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rule" ADD CONSTRAINT "Rule_talentInterestCode_fkey" FOREIGN KEY ("talentInterestCode") REFERENCES "TalentInterest"("code") ON DELETE CASCADE ON UPDATE CASCADE;
