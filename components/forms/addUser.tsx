import { useReducer, useState } from "react"
import { useRouter } from "next/router"
import { Role } from "@prisma/client"
import { initialState, reducer } from "../../lib/reducers/addUser"
import { auth } from "../../lib/mutations"

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input,
  FormErrorMessage,
  ButtonGroup,
  Button,
} from "@chakra-ui/react"

const AddUserForm = ({ mode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    role,
    organization,
    firstName,
    lastName,
    email,
    phoneNumber,
    password,
    confirmPassword,
  } = state

  const getRoleEnum = (role) => {
    if (role === "User") return Role.USER
    if (role === "Admin") return Role.ADMIN
    return Role.SUPERADMIN
  }

  const handleInputChange = (e) => {
    dispatch({
      type: e.target.id,
      payload: { input: e.target.value },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const user = await auth(mode, {
      role: getRoleEnum(role.input),
      organization: organization.input,
      firstName: firstName.input,
      lastName: lastName.input,
      email: email.input,
      phoneNumber: phoneNumber.input,
      password: password.input,
    })
    setIsLoading(false)
    router.push("/users")
  }

  return (
    <Flex
      width={["100%", "700px"]}
      border={["none", "none", "1px solid black"]}
      borderRadius="6px"
      paddingY={["0", "20px"]}
      paddingX={["0", "40px"]}
      justify="center"
      overflow="scroll"
    >
      <Box width={["80%", "80%", "100%"]}>
        <form style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
          <Flex
            direction={["column", "column", "row"]}
            justify="space-between"
            marginBottom="10px"
          >
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
            >
              <FormLabel htmlFor="role">Role</FormLabel>
              <Select
                id="role"
                placeholder="Select role"
                onChange={(e) => handleInputChange(e)}
              >
                <option>User</option>
                <option>Admin</option>
                <option>Super Admin</option>
              </Select>
            </FormControl>
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
            >
              <FormLabel htmlFor="organization">Organization</FormLabel>
              <Input
                id="organization"
                type="text"
                value={organization.input}
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
          </Flex>
          <Flex
            direction={["column", "column", "row"]}
            justify="space-between"
            marginBottom="10px"
          >
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="first-name">First name</FormLabel>
              <Input
                id="first-name"
                placeholder="First name"
                type="text"
                value={firstName.input}
                onChange={(e) => handleInputChange(e)}
              />
              {/* {isError && (
                    <FormErrorMessage>First name required</FormErrorMessage>
                  )} */}
            </FormControl>
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="last-name">Last name</FormLabel>
              <Input
                id="last-name"
                placeholder="Last name"
                type="text"
                value={lastName.input}
                onChange={(e) => handleInputChange(e)}
              />
              {/* {isError && <FormErrorMessage>Last name required</FormErrorMessage>} */}
            </FormControl>
          </Flex>
          <Flex
            direction={["column", "column", "row"]}
            justify="space-between"
            marginBottom="10px"
          >
            <FormControl
              width={["100%", "100%", "49%"]}
              isInvalid={email.isError}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="Email"
                type="email"
                value={email.input}
                onChange={(e) => handleInputChange(e)}
              />
              {email.isError && (
                <FormErrorMessage>Email required</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
            >
              <FormLabel htmlFor="phone">Phone number</FormLabel>
              <Input
                id="phone"
                placeholder="Phone number"
                type="tel"
                // value={phoneNumber.input}
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
          </Flex>
          <Flex
            direction={["column", "column", "row"]}
            justify="space-between"
            marginBottom="30px"
          >
            <FormControl
              width={["100%", "100%", "49%"]}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Password"
                type="password"
                value={password.input}
                onChange={(e) => handleInputChange(e)}
              />
              {/* {isError && <FormErrorMessage>Email required</FormErrorMessage>} */}
            </FormControl>
            <FormControl
              width={["100%", "100%", "49%"]}
              isInvalid={confirmPassword.isError}
              marginBottom={["10px", "10px", "0"]}
              isRequired
            >
              <FormLabel htmlFor="confirm-password">Confirm password</FormLabel>
              <Input
                id="confirm-password"
                placeholder="Confirm password"
                type="password"
                value={confirmPassword.input}
                onChange={(e) => handleInputChange(e)}
              />
              {confirmPassword.isError && (
                <FormErrorMessage>Passwords do not match</FormErrorMessage>
              )}
            </FormControl>
          </Flex>
          <ButtonGroup width="100%" marginBottom={["30px", "30px", "0"]}>
            <Flex
              direction={["column-reverse", "column-reverse", "row"]}
              width="100%"
              justify="space-between"
            >
              <Button variant="outline" width={["100%", "100%", "49%"]}>
                Cancel
              </Button>
              <Button
                backgroundColor="lightblue"
                width={["100%", "100%", "49%"]}
                type="submit"
                isLoading={isLoading}
                marginBottom={["15px", "15px", "0"]}
              >
                {mode === "addUser" && "Add User"}
              </Button>
            </Flex>
          </ButtonGroup>
        </form>
      </Box>
    </Flex>
  )
}

export default AddUserForm
