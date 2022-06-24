import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"
import { organizations } from "./seedData"

const prisma = new PrismaClient()
const salt = bcrypt.genSaltSync()

const run = async () => {
  await Promise.all(
    organizations.map(async (org) => {
      return prisma.organization.upsert({
        create: {
          name: org.name,
          address: org.address,
          city: org.city,
          state: org.state,
          zipCode: org.zipCode,
          phoneNumber: org.phoneNumber,
          isActive: org.isActive,
          users: {
            create: org.users.map((user) => ({
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              password: bcrypt.hashSync(user.password, salt),
              phoneNumber: user.phoneNumber,
              isActive: user.isActive,
              role: user.role,
            })),
          },
        },
        update: {},
        where: { name: org.name },
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
