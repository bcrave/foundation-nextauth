import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react"

const AddOrganization = () => {
  return (
    <Flex
      height="calc(100vh - 90px)"
      mt="90px"
      align="center"
      justify="center"
      width="100%"
    >
      <Box width="80%" height="60%">
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor="name">Organization Name</FormLabel>
            <Input id="name" type="text" />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input id="email" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="address">Street Address</FormLabel>
            <Input id="address" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <Input id="phone" type="phone" />
          </FormControl>
        </form>
      </Box>
    </Flex>
  )
}

export default AddOrganization
