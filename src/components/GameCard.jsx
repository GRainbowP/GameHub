import { Card, Image, Heading, HStack } from "@chakra-ui/react"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../services/image-url"
import GameCardContainer from "./GameCardContainer"

function GameCard({ game }) {


    return (
        <GameCardContainer>
            <Card.Root>
                <Image src={getCroppedImageUrl(game.background_image)} alt={game.name} />
                <Card.Body>
                    <PlatformIconList platforms={game.parent_platforms} />
                    <HStack justifyContent="space-between">
                        <Heading>{game.name}</Heading>
                        <CriticScore score={game.metacritic} />
                    </HStack>
                </Card.Body>
            </Card.Root>
        </GameCardContainer>
    )

}

export default GameCard