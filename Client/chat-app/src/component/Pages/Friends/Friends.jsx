import { Avatar, Box, Flex, Text, Spacer } from "@chakra-ui/react";
import React from "react";

export const Friends = () => {

    
  const demo = [
    {
      avatar:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      name: "dipratna sakhare",
      time:"16:56"
    },
    {
      avatar:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      name: "dipratna sakhare",
      time:"16:56"

    },
    {
      avatar:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      name: "dipratna sakhare",
      time:"16:56"

    },
    {
      avatar:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      name: "dipratna sakhare",
      time:"16:56"

    },
    {
      avatar:
        "https://t4.ftcdn.net/jpg/05/11/55/91/240_F_511559113_UTxNAE1EP40z1qZ8hIzGNrB0LwqwjruK.jpg",
      name: "dipratna sakhare",
      time:"16:56"

    },
  ];
  return (
    <Box>
      {demo.map((ele, i) => (
        <Flex p="5px" borderBottom={"1px solid"}>
          <Avatar size={"lg"} src={ele.avatar} />
          <Box mt="5px">
            <Text>{ele.name}</Text>
          </Box>
          <Spacer />
          <Box>
            <Text>{ele.time}</Text>
          </Box>

        </Flex>
      ))}
    </Box>
  );
};
