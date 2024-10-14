import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <div>
      <HStack justifyContent={"space-between"} p={4} padding={"0 20px"}>
        <Image src={logo} boxSize={"80px"} />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
