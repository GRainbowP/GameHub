import { Badge } from "@chakra-ui/react"

function CriticScore({score}) {

    let color = "";

    if(score > 75) {
        color = "green"
    }else if(score > 50) {
        color = "yellow"
    }else {
        color = "red"
    }

    return (
        <Badge colorPalette={color} fontSize="14px" paddingX={2} borderRadius={4}>
            {score}
        </Badge>
    )
}

export default CriticScore