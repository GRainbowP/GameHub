import { Skeleton, Card, SkeletonText } from "@chakra-ui/react";
import GameCardContainer from "./GameCardContainer";

function GameCardSkeleton() {


    return (
        <GameCardContainer>
            <Card.Root>
                <Skeleton height="200px" />
                <Card.Body>
                    <SkeletonText mt="4" noOfLines={2} wordSpacing={4} />
                </Card.Body>
            </Card.Root>
        </GameCardContainer>
    )
}

export default GameCardSkeleton