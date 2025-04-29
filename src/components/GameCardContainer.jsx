import { Box } from "@chakra-ui/react";

function GameCardContainer({children}) {


    return (
        <Box width="300px" borderRadius="10px" overflow="hidden" padding={3}> 
            {children}  
        </Box> 
    )
}

export default GameCardContainer