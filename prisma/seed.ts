import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { users } from "./seedData"

const prisma = new PrismaClient()
const salt = bcrypt.genSaltSync()

const run = async () => {
  await Promise.all(
    users.map(async (user) => {
      return prisma.user.upsert({
        create: {
          name: user.name,
          email: user.email,
          password: bcrypt.hashSync(user.password, salt),
          isActive: user.isActive,
        },
        update: {
          password: bcrypt.hashSync(user.password, salt),
        },
        where: { email: user.email },
      })
    })
  )
}

run()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
