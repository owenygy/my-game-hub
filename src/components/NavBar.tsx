import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} p={4} padding={"0 10px"}>
        <Image src={logo} boxSize={"60px"} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
