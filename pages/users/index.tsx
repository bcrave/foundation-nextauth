import { useState, useEffect } from "react"
import NextLink from "next/link"
import { Box, Flex, InputGroup, Input, Button, Text } from "@chakra-ui/react"
const AllUsersPage = () => {
  const handleInputChange = (e) => {}

  return (
    <Box bg="pink" height="calc(100vh - 100)" marginTop="90px">
      <Flex justify="space-between" align="center" height="125px">
        <Box width="400px">
          <InputGroup>
            <Input
              placeholder="Filter results..."
              onChange={(e) => handleInputChange(e)}
            />
          </InputGroup>
        </Box>
      </Flex>
    </Box>
  )
}

export default AllUsersPage
