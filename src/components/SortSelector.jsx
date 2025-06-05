import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector() {

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    Order by Relevance
                    <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item>Relevance</Menu.Item>
                        <Menu.Item>Date Added</Menu.Item>
                        <Menu.Item>Name</Menu.Item>
                        <Menu.Item>Release Date</Menu.Item>
                        <Menu.Item>Popularity</Menu.Item>
                        <Menu.Item>Average Rating</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector