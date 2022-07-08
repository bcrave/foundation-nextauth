import { useRef, useState, useReducer } from "react"
import { initialState, formReducer } from "../../lib/reducers/editUser"
import { auth } from "../../lib/mutations"
import {
  Box,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react"
import { EditIcon } from "@chakra-ui/icons"

const EditProfileModal = ({ mode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(formReducer, initialState)
  const { name, email, phone } = state
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef()
  const finalRef = useRef()

  const handleInputChange = (e) => {
    dispatch({
      type: e.target.id,
      payload: { value: e.target.value },
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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

  return (
    <Box display={["none", "block"]}>
      <Button variant="ghost" onClick={onOpen}>
        <Text fontSize="2xl">
          <EditIcon />
        </Text>
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit your Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={(e) => handleSubmit(e)} id="edit-profile-form">
              <FormControl mt={4}>
                <FormLabel>Name</FormLabel>
                <Input
                  id="name"
                  placeholder="Name"
                  value={name.value}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
              <FormControl mt={4} isInvalid={email.isError}>
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
              <FormControl mt={4}>
                <FormLabel>Phone</FormLabel>
                <Input
                  id="phone"
                  placeholder="phone"
                  value={phone.value}
                  onChange={(e) => handleInputChange(e)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={isLoading}
              type="submit"
              colorScheme="blue"
              mr={3}
              onClick={(e) => handleSubmit(e)}
              form="edit-profile-form"
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )
}

export default EditProfileModal
