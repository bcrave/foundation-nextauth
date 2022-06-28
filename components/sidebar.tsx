import NextLink from "next/link"
import { useRef } from "react"
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  Text,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import { signOut } from "next-auth/react"

const Sidebar = ({ session, links, adminLinks }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <Box>
      <IconButton
        bg="transparent"
        aria-label="open sidebar"
        ref={btnRef}
        onClick={onOpen}
        icon={<HamburgerIcon w={10} h={8} />}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <small>Logged in as</small> {session.user.email}
          </DrawerHeader>
          <DrawerBody>
            <nav>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {links.map((link) => (
                  <GridItem colSpan={1}>
                    <NextLink href={link.route} passHref key={link.name}>
                      <Button
                        onClick={onClose}
                        paddingY={4}
                        paddingX={8}
                        transition="background-color 0.2s ease-in-out"
                        width="100%"
                        sx={{
                          "&:hover": {
                            backgroundColor: "lightgray",
                            cursor: "pointer",
                          },
                        }}
                      >
                        {link.name}
                      </Button>
                    </NextLink>
                  </GridItem>
                ))}
              </Grid>
              <Divider marginY={10} />
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                {adminLinks.map((link) => (
                  <GridItem key={link.name}>
                    <NextLink href={link.route}>
                      <Button
                        onClick={onClose}
                        paddingY={4}
                        paddingX={8}
                        transition="background-color 0.2s ease-in-out"
                        width="100%"
                      >
                        {link.name}
                      </Button>
                    </NextLink>
                  </GridItem>
                ))}
                <GridItem colStart={2} colEnd={2}>
                  <Button
                    paddingY={4}
                    paddingX={8}
                    onClick={() => signOut()}
                    width="100%"
                    bg="lightblue"
                  >
                    <Text>Sign Out</Text>
                  </Button>
                </GridItem>
              </Grid>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}

export default Sidebar
