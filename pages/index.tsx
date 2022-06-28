import NextLink from "next/link"
import { useSession } from "next-auth/react"
import { Flex, Text, Image } from "@chakra-ui/react"
import { Box } from "@chakra-ui/layout"
import SigninForm from "../components/signin"
import HomePage from "../components/home"

export default function IndexPage() {
  const { data: session } = useSession()
  return (
    <>
      {session ? (
        <HomePage />
      ) : (
        <Flex height="100vh" justify="center" align="center">
          <Flex align="center" justify="space-between" height="100%">
            <Box display={["none", "none", "none", "block"]}>
              <Image src="phone.png" width="500px" />
            </Box>
            <Box height="80%">
              <SigninForm />
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
