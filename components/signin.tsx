import NextLink from "next/link"
import { useState, useEffect, FormEvent } from "react"
import {
  Flex,
  Box,
  Button,
  Text,
  Image,
  Divider,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react"
import {
  getProviders,
  signIn,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"

const Signin = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders()
      setProviders(setupProviders)
    }
    setTheProviders()
  }, [])

  const handleChange = (e) => {
    const { id } = e.target
    id == "email" ? setEmail(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signIn("credentials", { redirect: false, email, password })
  }

  return (
    <Flex
      direction="column"
      align="center"
      justify={["space-around", "space-around", "space-around", "space-around"]}
      height="80%"
    >
      <Image src="logo.svg" width="300px" />
      {providers && (
        <Flex direction="column" justify="center" width="97%">
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl marginBottom="15px">
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                type="text"
                id="email"
                placeholder="user@example.com"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <FormControl marginBottom="40px">
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                type="password"
                id="password"
                placeholder="password"
                onChange={(e) => handleChange(e)}
              />
            </FormControl>
            <Button
              type="submit"
              width="100%"
              marginBottom="30px"
              bg="lightblue"
            >
              Sign in
            </Button>
          </form>
          {/* <Divider orientation="horizontal" marginY="20px" /> */}
          {/* <Box>
            <Button onClick={() => signIn(providers.google.id)}>Google</Button>
            <Button onClick={() => signIn(providers.github.id)}>GitHub</Button>
          </Box> */}
        </Flex>
      )}
    </Flex>
  )
}

export default Signin
