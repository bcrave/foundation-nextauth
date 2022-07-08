import { formatPhoneNumber } from "../../lib/formatters"
import {
  Box,
  Flex,
  Text,
  Image,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react"
import { useMe } from "../../lib/hooks"
import EditProfileModal from "../../components/modals/editProfile"
import CustomDrawer from "../../components/drawers/customDrawer"

const ProfilePage = () => {
  const { user, isLoading } = useMe()

  return (
    <Flex
      align="center"
      justify="center"
      height="calc(100vh - 90px)"
      marginTop="90px"
    >
      <Box
        backgroundColor={{ lg: "lightgray" }}
        width={["100%", "900px"]}
        height={["100%", "500px"]}
        borderRadius={{ lg: "20px" }}
      >
        {!isLoading && (
          <Box height="100%" width="100%" borderRadius="inherit">
            <Box
              height={["150px", "35%"]}
              width="100%"
              bg="lightblue"
              borderTopRadius="inherit"
              background="url('https://picsum.photos/700/500')"
              backgroundPosition="center"
              backgroundSize="cover"
              position="relative"
            >
              <Image
                src="https://picsum.photos/150"
                width={["135px", "150px"]}
                alt="profile-pic"
                borderRadius="100%"
                marginRight="50px"
                position="absolute"
                left={["50%", "30px"]}
                top="100%"
                transform={["translate(-50%, -50%)", "translateY(-70%)"]}
                border={{ lg: "4px solid lightgray" }}
              />
            </Box>
            <Box paddingY="70px" paddingX="40px" position="relative">
              <Box position="absolute" right="20px" top="10px">
                <EditProfileModal mode="updateProfile" />
                <CustomDrawer mode="editProfile" />
              </Box>
              <Flex width="100%" direction="column" justify="center" mt="30px">
                <Text as="h3" fontSize="3xl" textAlign="center">
                  {user.name}
                </Text>
                <Text fontSize="lg" textAlign="center">
                  {user.email}
                </Text>
                <Text fontSize="lg" textAlign="center">
                  {formatPhoneNumber(user.phone)}
                </Text>
              </Flex>
            </Box>
          </Box>
        )}
        {isLoading && (
          <Box paddingX="20" paddingY="16" width="100%">
            <SkeletonCircle size="20" marginBottom="50px" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        )}
      </Box>
    </Flex>
  )
}

export default ProfilePage
