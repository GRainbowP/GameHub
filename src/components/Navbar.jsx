import { HStack } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import logo_white from '../assets/logo-white.png'
import ColorModeSwitch from "./ColorModeSwitch"
import { useColorMode } from "./ui/color-mode"


function Navbar() {
    const { colorMode } = useColorMode();

    return (
        <HStack justifyContent="space-between">
            <img src={colorMode === "dark" ? logo_white : logo} alt="logo" height="32" width="32" />
            <p>Game HUB</p>
            <ColorModeSwitch />
        </HStack>
    )
}

export default Navbar