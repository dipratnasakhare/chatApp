import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  Text,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { NavLink } from "react-router-dom";

const LinkReact = () => {

  const navlinkArray = [
    { to: "chats", title: "chats" },
    { to: "call", title: "call" },
    { to: "video", title: "video" },
  ];

  let Active = {
    textDecoration: "none",
    borderBottom:"2px solid blue",
  };

  let NotActive = {
    textDecoration: "none",
  };

  return (
    <Flex  px={4} border="1px solid red" h={16} alignItems={'center'} justifyContent={'space-between'}>
      {navlinkArray.map((ele, i) => {
        return (
          <NavLink
            key={i}
            style={({ isActive }) => (isActive ? Active : NotActive)}
            to={ele.to}
            end
          >
            <Text>{ele.title}</Text>
          </NavLink>
        );
      })}
    </Flex>
  );
};


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex
          px={4}
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>WhatsApp</Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={"https://avatars.dicebear.com/api/male/username.svg"}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={"https://avatars.dicebear.com/api/male/username.svg"}
                    />
                  </Center>
                  <br />
                  <Center>
                    <Text>Username</Text>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

          <LinkReact />
      </Box>
    </>
  );
}
