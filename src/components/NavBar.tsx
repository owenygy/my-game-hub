import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text fontSize={"2xl"}>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
