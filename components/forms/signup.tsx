import { useReducer, useState, useRef, useEffect } from "react"
import { useRouter } from "next/router"
import { auth } from "../../lib/mutations"
import {
  getProviders,
  signIn,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react"
import { BuiltInProviderType } from "next-auth/providers"
import { initialState, reducer } from "../../lib/reducers/signup"
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  ButtonGroup,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

const SignupForm = () => {
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()
  const passwordRef = useRef(null)
  const confirmPasswordRef = useRef(null)

  const { email, password, confirmPassword } = state

  useEffect(() => {
    const setTheProviders = async () => {
      const setupProviders = await getProviders()
      setProviders(setupProviders)
    }
    setTheProviders()
  }, [])

  const handleInputChange = (e) => {
    dispatch({
      type: e.target.id,
      payload: { value: e.target.value },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    /* Validate email/password */
    if (email.isError) {
      setIsLoading(false)
      return setError("Invalid email")
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setIsLoading(false)
      return setError("Passwords do not match")
    }

    try {
      const user = await auth("signup", {
        email: email.value,
        password: password.value,
      })
      await signIn("credentials", {
        redirect: false,
        email: email.value,
        password: password.value,
      })
    } catch {
      setError("Failed to create account")
    }
    setIsLoading(false)
    router.push("/")
  }

  return (
    <>
      <Flex
        width={["100%", "550px"]}
        border={["none", "none", "1px solid black"]}
        borderRadius="6px"
        paddingY={["0", "20px"]}
        paddingX={["0", "40px"]}
        justify="center"
      >
        <Box width={["80%", "80%", "100%"]}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
              <AlertDescription>
                Check your input and try again.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={(e) => handleSubmit(e)}>
            <FormControl
              width="100%"
              isInvalid={email.isError}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="johnny@appleseed.com"
                type="email"
                value={email.value}
                onChange={(e) => handleInputChange(e)}
              />
              {email.isError && (
                <FormErrorMessage>Email required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              width="100%"
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="********"
                type="password"
                value={password.value}
                onChange={(e) => handleInputChange(e)}
                ref={passwordRef}
              />
              {/* {isError && <FormErrorMessage>Email required</FormErrorMessage>} */}
            </FormControl>
            <FormControl
              width="100%"
              isInvalid={confirmPassword.isError}
              marginBottom="50px"
              isRequired
            >
              <FormLabel htmlFor="confirm-password">Confirm password</FormLabel>
              <Input
                id="confirm-password"
                placeholder="********"
                type="password"
                value={confirmPassword.value}
                onChange={(e) => handleInputChange(e)}
                ref={confirmPasswordRef}
              />
              {confirmPassword.isError && (
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
              )}
            </FormControl>
            <ButtonGroup width="100%" marginBottom={["30px", "30px", "0"]}>
              <Flex
                direction={["column-reverse", "column-reverse", "row"]}
                width="100%"
                justify="space-between"
              >
                <Button
                  variant="outline"
                  width={["100%", "100%", "49%"]}
                  onClick={() => router.push("/")}
                >
                  Cancel
                </Button>
                <Button
                  backgroundColor="lightblue"
                  width={["100%", "100%", "49%"]}
                  type="submit"
                  isLoading={isLoading}
                  marginBottom={["15px", "15px", "0"]}
                >
                  Sign up
                </Button>
              </Flex>
            </ButtonGroup>
          </form>
        </Box>
      </Flex>
    </>
  )
}

export default SignupForm
