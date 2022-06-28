import bcrypt from "bcrypt"
import prisma from "../../lib/prisma"

const addUser = async (req, res) => {
  const salt = bcrypt.genSaltSync()
  const {
    firstName,
    lastName,
    email,
    password,
    phoneNumber,
    organization,
    role,
  } = req.body

  let user
  // const org = await prisma.organization.findUnique({
  //   where: {
  //     name: organization,
  //   },
  // })

  // try {
  //   user = await prisma.user.create({
  //     data: {
  //       firstName,
  //       lastName,
  //       email,
  //       password: bcrypt.hashSync(password, salt),
  //       phoneNumber,
  //       isActive: true,
  //       organizationId: org.id,
  //       role,
  //     },
  //   })
  // } catch (err) {
  //   res.status(401)
  //   res.json({ error: "User already exists" })
  //   return
  // }

  // const token = jwt.sign(
  //   {
  //     email: user.email,
  //     id: user.id,
  //     role: user.role,
  //     time: Date.now(),
  //   },
  //   "foundation",
  //   { expiresIn: "8h" }
  // )

  // res.setHeader(
  //   "Set-Cookie",
  //   cookie.serialize("FOUNDATION_ACCESS_TOKEN", token, {
  //     httpOnly: true,
  //     maxAge: 8 * 60 * 60,
  //     path: "/",
  //     sameSite: "lax",
  //     secure: process.env.NODE_ENV === "production",
  //   })
  // )

  res.json(user)
}

export default addUser
