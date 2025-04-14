import { Card, Image, Heading } from "@chakra-ui/react"

function GameCard({ game }) {


    return (
        <Card.Root borderRadius="10px" overflow="hidden">
            <Image src={game.background_image} alt={game.name} />
            <Card.Body>
                <Heading>{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    )

}

export default GameCard