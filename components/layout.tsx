import Header from "./header"
import Footer from "./footer"
import { useSession } from "next-auth/react"

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const { data: session } = useSession()

  return (
    <>
      {session && <Header />}
      <main>{children}</main>
      {session && <Footer />}
    </>
  )
}
