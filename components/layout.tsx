import Header from "./header"
import Footer from "./footer"
import { Box } from "@chakra-ui/react"
import { useSession } from "next-auth/react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { data: session } = useSession()

  return (
    <>
      {session && <Header session={session} />}
      <Box>{children}</Box>
      {session && <Footer />}
    </>
  )
}
