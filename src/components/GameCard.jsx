import { Card, Image, Heading, HStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"

function GameCard({ game }) {


    return (
        <Card.Root borderRadius="10px" overflow="hidden">
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <PlatformIconList platforms={game.parent_platforms} />
                <HStack justifyContent="space-between">
                    <Heading>{game.name}</Heading>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </Card.Body>
        </Card.Root>
    )

}

export default GameCard