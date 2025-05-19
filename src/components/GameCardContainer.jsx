import { Box } from "@chakra-ui/react";

function GameCardContainer({children}) {

    return (
        <Box borderRadius="10px" overflow="hidden" padding={3}> 
            {children}  
        </Box> 
    )
}

export default GameCardContainer