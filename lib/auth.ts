import prisma from "./prisma"
import { getToken } from "next-auth/jwt"

const secret = process.env.NEXTAUTH_SECRET

export const validateRoute = (handler) => {
  return async (req, res) => {
    const token = await getToken({ req, secret })

    if (token) {
      let user

      try {
        const { id } = token
        user = await prisma.user.findUnique({ where: { id: id as string } })

        if (!user) {
          throw new Error("Not real user or incorrect role")
        }
      } catch (err) {
        res.status(401)
        res.json({ error: "Not authorized" })
        return
      }
      return handler(req, res, user)
    }
    res.status(401)
    res.json({ error: "Not authorized" })
  }
}
