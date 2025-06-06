import { HStack, Switch, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

function ColorModeSwitch() {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
        <HStack>
            <Text>Dark Mode</Text>
            <Switch.Root checked={colorMode === "dark"} onCheckedChange={() => toggleColorMode()} colorPalette="green">
                <Switch.HiddenInput />
                <Switch.Control />
            </Switch.Root>
        </HStack>
    )
    
}

export default ColorModeSwitch