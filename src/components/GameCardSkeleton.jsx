import { Skeleton, Card, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {


    return (
        <Card.Root width="300px" borderRadius="10px" overflow="hidden" padding={3}>
            <Skeleton height="200px" />
            <Card.Body>
                <SkeletonText mt="4" noOfLines={2} wordSpacing={4} />
            </Card.Body>
        </Card.Root>
    )
}

export default GameCardSkeleton