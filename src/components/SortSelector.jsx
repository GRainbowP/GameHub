import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

function SortSelector({onSelectSortOrder, sortOrder}) {

    function currentSort() {
        switch(sortOrder) {
            case "added":
                return "Date Added"
            case "name":
                return "Name"
            case "-released":
                return "Release Date"
            case "rating":
                return "Average Rating"
            default:
                return "Relevance"
        }
    }

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button>
                    {currentSort() || "Sortuj według"}
                    <BsChevronDown/>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item onClick={() => onSelectSortOrder(prevQuery => ({...prevQuery, sortOrder: null, }))}>Relevance</Menu.Item>
                        <Menu.Item onClick={() => onSelectSortOrder(prevQuery => ({...prevQuery, sortOrder: "added", }))}>Date Added</Menu.Item>
                        <Menu.Item onClick={() => onSelectSortOrder(prevQuery => ({...prevQuery, sortOrder: "name", }))}>Name</Menu.Item>
                        <Menu.Item onClick={() => onSelectSortOrder(prevQuery => ({...prevQuery, sortOrder: "-released", }))}>Release Date</Menu.Item>
                        <Menu.Item onClick={() => onSelectSortOrder(prevQuery => ({...prevQuery, sortOrder: "rating", }))}>Average Rating</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}

export default SortSelector