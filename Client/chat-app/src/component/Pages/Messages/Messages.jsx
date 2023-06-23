import { Avatar, Box, Image, Input, Text, Flex, Spacer } from "@chakra-ui/react";
import React from "react";

export const Messages = () => {
  const arr = [];
  return (
    <Box w="100%">
      {/* navbar for chat  */}
      <Box w="100%" p="20px" bg="gray.300">
        <Box>
          <Avatar
            size={"lg"}
            src={"https://avatars.dicebear.com/api/male/username.svg"}
          />
        </Box>
      </Box>

      <Box h="100%" bg="green">
        <Image src="https://store-images.s-microsoft.com/image/apps.8985.13655054093851568.1c669dab-3716-40f6-9b59-de7483397c3a.8b1af40f-2a98-4a00-98cd-94e485a04427" />
      </Box>

      <Box p="10px" pl="20px" bg="gray.100">
        <Box bg="white">
          <Input borderRadius={"0px"} placeholder="🔎" size="md" />
        </Box>
        <Spacer/>
      </Box>
    </Box>
  );
};
