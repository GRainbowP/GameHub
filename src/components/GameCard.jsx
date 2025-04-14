import { Card, Image, Heading } from "@chakra-ui/react"

function GameCard({ game }) {


    return (
        <Card.Root borderRadius="10px" overflow="hidden">
            <Card.Header>
                <Image src={game.background_image} alt={game.name} />
            </Card.Header>
            <Card.Body>
                <Heading>{game.name}</Heading>
            </Card.Body>
        </Card.Root>
    )

}

export default GameCard