import { Menu, Button, Portal } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

function PlatformSelector({onSelectPlatform}) {
    const {data: platforms, error} = usePlatforms();
    if(error) return null;

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    Platformy
                    <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        {platforms.map((platform) => (
                            <Menu.Item key={platform.id} onClick={() => onSelectPlatform(prevQuery => ({...prevQuery, platform: platform, }))}>{platform.name}</Menu.Item>
                        ))}
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default PlatformSelector