import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react"
import NextLink from "next/link"
import { useSession } from "next-auth/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

const DropdownMenu = ({ links }) => {
  const { data: session } = useSession()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {session ? session.role : "Actions"}
      </MenuButton>
      <MenuList>
        {links.map((link) => (
          <NextLink href={link.route} key={link.name}>
            <MenuItem>{link.name}</MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  )
}

export default DropdownMenu
