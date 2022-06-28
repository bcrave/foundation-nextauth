import NextLink from "next/link"
import { Flex, Heading, Link, Box } from "@chakra-ui/react"

const HomePage = () => {
  return (
    <Flex
      height="calc(100vh - 100px)"
      justify="center"
      align="center"
      direction="column"
    >
      <Heading as="h1" size={["xl", "2xl", "3xl"]} marginBottom="30px">
        Welcome to{" "}
        <NextLink
          href="https://github.com/bcrave/foundation-nextjs-prisma/blob/main/README.md"
          passHref
        >
          <Link target="_blank" color="#044B7F">
            Foundation
          </Link>
        </NextLink>
      </Heading>
      <Heading as="h2" fontSize="lg" textAlign="center">
        Dev Pipeline&apos;s Foundation
        <Box display={{ md: "none" }} height="0">
          <br />
        </Box>
        built with{" "}
        <NextLink href="https://nextjs.org/" passHref>
          <Link target="_blank" color="#044B7F">
            Next.js
          </Link>
        </NextLink>{" "}
        and{" "}
        <NextLink href="https://chakra-ui.com/" passHref>
          <Link target="_blank" color="#044B7F">
            Chakra
          </Link>
        </NextLink>
      </Heading>
    </Flex>
  )
}

export default HomePage
