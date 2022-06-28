import NextLink from "next/link"
import { Flex, Center, Text, Box } from "@chakra-ui/react"
import SignupForm from "../components/forms/signup"

const SignupPage = () => {
  return (
    <Flex height="100vh" justify="center" align="center" direction="column">
      <Center width={["100%", "700px"]} marginBottom="30px">
        <Text as="h1" fontSize="4xl">
          Signup
        </Text>
      </Center>
      <SignupForm />
      <Box textAlign="center">
        <Text>
          Already have an account? Sign in{" "}
          <NextLink href="/" passHref>
            <a style={{ color: "blue", textDecoration: "underline" }}>here</a>
          </NextLink>
        </Text>
      </Box>
    </Flex>
  )
}

export default SignupPage
