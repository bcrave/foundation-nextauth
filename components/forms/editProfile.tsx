import { useState, useReducer, useRef } from "react"
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Flex,
  Button,
} from "@chakra-ui/react"
import { initialState, formReducer } from "../../lib/reducers/editUser"
import { auth } from "../../lib/mutations"

const EditProfileForm = ({ mode, onClose }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { name, email, phone } = state

  const initialRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({
      name: name.value,
      email: email.value,
      phone: phone.value,
    })
    setIsLoading(true)
    const user = await auth(mode, {
      name: name.value,
      email: email.value,
      phone: phone.value,
    })
    setIsLoading(false)
    onClose()
    window.location.reload()
  }

  const handleInputChange = (e) => {
    dispatch({
      type: e.target.id,
      payload: { value: e.target.value },
    })
  }
  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      id="edit-profile-form"
      style={{ marginTop: "30px" }}
    >
      <FormControl mb="30px">
        <FormLabel>Name</FormLabel>
        <Input
          ref={initialRef}
          id="name"
          placeholder="Name"
          value={name.value}
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <FormControl mb="30px" isInvalid={email.isError}>
        <FormLabel>Email</FormLabel>
        <Input
          id="email"
          placeholder="Email"
          type="email"
          value={email.value}
          onChange={(e) => handleInputChange(e)}
        />
        {email.isError && (
          <FormErrorMessage>Email is required.</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Phone</FormLabel>
        <Input
          id="phone"
          placeholder="phone"
          value={phone.value}
          onChange={(e) => handleInputChange(e)}
        />
      </FormControl>
      <Flex position="absolute" bottom="16px" right="24px">
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          isLoading={isLoading}
          colorScheme="blue"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </Flex>
    </form>
  )
}

export default EditProfileForm
