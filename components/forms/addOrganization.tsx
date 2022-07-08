import { FormControl, FormLabel, Input, Button, Flex } from "@chakra-ui/react"

const AddOrganizationForm = ({ mode, onClose }) => {
  return (
    <form style={{ marginTop: "30px" }}>
      <FormControl isRequired mb="25px">
        <FormLabel htmlFor="name">Organization Name</FormLabel>
        <Input id="name" type="text" />
      </FormControl>
      <FormControl mb="25px">
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <FormControl isRequired mb="25px">
        <FormLabel htmlFor="address">Street Address</FormLabel>
        <Input id="address" type="text" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel htmlFor="phone">Phone Number</FormLabel>
        <Input id="phone" type="phone" />
      </FormControl>
      <Flex position="absolute" bottom="16px" right="24px">
        <Button variant="outline" mr={3} onClick={onClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          // isLoading={isLoading}
          colorScheme="blue"
          // onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </Flex>
    </form>
  )
}

export default AddOrganizationForm
