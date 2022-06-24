import NextLink from "next/link"
import { useSession } from "next-auth/react"
import { Flex, Text, Image } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import Signin from "../components/signin"

export default function IndexPage() {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <>
          <h1>NextAuth.js Example</h1>
          <p>
            This is an example site to demonstrate how to use{" "}
            <a href="https://next-auth.js.org">NextAuth.js</a> for
            authentication.
          </p>{" "}
        </>
      ) : (
        <Flex height="100vh" justify="center" align="center">
          <Flex align="center" justify="space-between" height="100%">
            <Box display={["none", "none", "none", "block"]}>
              <Image src="phone.png" width="500px" />
            </Box>
            <Box height="80%">
              <Signin />
              <Box textAlign="center">
                <Text>
                  No account? Sign up{" "}
                  <NextLink href="/signup" passHref>
                    <a style={{ color: "blue", textDecoration: "underline" }}>
                      here
                    </a>
                  </NextLink>
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
      )}
    </>
  )
}
