import { Box, Flex, InputGroup, Input } from "@chakra-ui/react"
import { useOrgsList } from "../../lib/hooks"
import CustomDrawer from "../../components/drawers/customDrawer"

const AllOrgsPage = () => {
  const { organizations } = useOrgsList()
  const handleInputChange = (e) => {}

  return (
    <Box
      bg="pink"
      height="calc(100vh - 90px)"
      marginTop="90px"
      position="relative"
    >
      <Flex justify="space-between" align="center" height="125px">
        <Box width="400px">
          <InputGroup>
            <Input
              placeholder="Filter organizations..."
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
        </Box>
      </Flex>
      <Box position="absolute" bottom="20px" right="20px">
        <CustomDrawer mode={"addOrganization"} />
      </Box>
    </Box>
  )
}

export default AllOrgsPage
