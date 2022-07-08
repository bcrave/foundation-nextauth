import { useRef } from "react"
import {
  Button,
  Text,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react"
import { EditIcon, AddIcon } from "@chakra-ui/icons"
import AddOrganizationForm from "../forms/addOrganization"
import EditProfileForm from "../forms/editProfile"

const EditProfileDrawer = ({ mode }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const btnRef = useRef()
  return (
    <Box display={["block", "none"]}>
      {mode === "editProfile" && (
        <Button ref={btnRef} variant="ghost" onClick={onOpen}>
          <Text fontSize="2xl">
            <EditIcon />
          </Text>
        </Button>
      )}
      {mode === "addOrganization" && (
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <AddIcon />
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="left"
        size="full"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{mode}</DrawerHeader>
          <DrawerBody>
            {mode === "editProfile" && (
              <EditProfileForm mode={mode} onClose={onClose} />
            )}
            {mode === "addOrganization" && (
              <AddOrganizationForm mode={mode} onClose={onClose} />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default EditProfileDrawer
