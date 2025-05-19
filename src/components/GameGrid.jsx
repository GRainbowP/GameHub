import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
    const {data: games, error, loading} = useGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    return (
        <div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} gap={3} p={10}>
                {loading && skeletons.map((skeleton) => (
                    <GameCardSkeleton key={skeleton} />
                ))}
                {!loading && games.map((game) => (
                    <GameCard key={game.id} game={game} /> 
                ))}
            </SimpleGrid>
        </div>
    )

}

export default GameGrid