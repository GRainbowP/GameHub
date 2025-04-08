import { HStack, Box } from "@chakra-ui/react"
import logo from '../assets/logo.png'
import logo_white from '../assets/logo-white.png'

function Navbar() {


    return (
        <HStack>
            <img src={logo_white} alt="logo" height="32" width="32" />
            <p>Game HUB</p>
        </HStack>
    )
}

export default Navbar