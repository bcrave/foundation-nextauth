import bcrypt from "bcrypt"
import prisma from "../../lib/prisma"

const signin = async (req, res) => {
  const salt = bcrypt.genSaltSync()
  const { email, password } = req.body

  let user
  try {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    })
  } catch (err) {
    res.status(401)
    res.json({ error: "User already exists" })
    return
  }
  res.json(user)
}

export default signin
