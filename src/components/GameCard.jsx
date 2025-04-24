import { Card, Image, Heading } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"

function GameCard({ game }) {


    return (
        <Card.Root borderRadius="10px" overflow="hidden">
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <PlatformIconList platforms={game.parent_platforms} />
                <Heading>{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    )

}

export default GameCard