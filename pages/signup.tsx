import { Flex, Center, Text } from "@chakra-ui/react"
import AddUserForm from "../components/forms/addUser"

const SignupPage = () => {
  return (
    <Flex height="100vh" justify="center" align="center" direction="column">
      <Center width={["100%", "700px"]} marginBottom="30px">
        <Text as="h1" fontSize="4xl">
          Add User
        </Text>
      </Center>
      <AddUserForm mode="addUser" />
    </Flex>
  )
}

export default SignupPage
