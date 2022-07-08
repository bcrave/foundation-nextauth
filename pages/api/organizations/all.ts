import prisma from "../../../lib/prisma"
import { validateRoute } from "../../../lib/auth"

export default validateRoute(async (req, res, user) => {
  const organizations = await prisma.organization.findMany({
    where: {
      ownerId: user.id,
    },
  })
  res.json(organizations)
})
