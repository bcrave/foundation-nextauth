import NextLink from "next/link"
import {
  Box,
  Flex,
  Link,
  InputGroup,
  Input,
  InputRightElement,
  Image,
} from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import Sidebar from "./drawers/sidebar"
import DropdownMenu from "../components/dropdownMenu"

const links = [
  { name: "Home", route: "/" },
  { name: "Profile", route: "/me/profile" },
  { name: "Account", route: "/me" },
]
const adminLinks = [
  { name: "Users", route: "/users" },
  { name: "Organizations", route: "/organizations" },
]

const Header = ({ session }) => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      width="100%"
      boxShadow="base"
      p="6"
      bg="white"
    >
      <Box
        width="100%"
        display={["flex", "flex", "none"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/">
          <Image src="/logo.svg" alt="foundation" />
        </NextLink>
        <Sidebar session={session} links={links} adminLinks={adminLinks} />
      </Box>
      <Box display={["none", "none", "block"]} height="100%">
        <Box width="100%" height="100%">
          <Flex justify="space-between" height="100%" width="90%" margin="auto">
            <Flex width="45%" justify="space-between" align="center">
              <NextLink href="/" passHref>
                <Link>
                  <Flex align="center">
                    <Image src="logo.svg" alt="foundation" />
                  </Flex>
                </Link>
              </NextLink>
              {session.role !== "superadmin" ? (
                <Box>
                  <NextLink href="/users/all" passHref>
                    <Link fontWeight="bold">Users</Link>
                  </NextLink>
                </Box>
              ) : (
                adminLinks.map((link) => (
                  <Box key={link.name}>
                    <NextLink href={link.route} passHref>
                      <Link fontWeight="bold">{link.name}</Link>
                    </NextLink>
                  </Box>
                ))
              )}
            </Flex>
            <Flex width="45%" justify="space-between" align="center">
              <InputGroup width="60%">
                <Input placeholder="Search" />
                <InputRightElement>
                  <SearchIcon />
                </InputRightElement>
              </InputGroup>
              <DropdownMenu links={links} />
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
