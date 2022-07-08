import { validateRoute } from "../../lib/auth"
import prisma from "../../lib/prisma"

export default validateRoute(async (req, res, user) => {
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      ...req.body,
    },
  })
  return res.json({ updatedUser })
})
