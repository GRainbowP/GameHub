import useGames from "../hooks/useGames";

function GameGrid() {
    const {games, error} = useGames();

    return (
        <div>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <ul>
                {games.map((game) => (
                    <li key={game.id}>
                        {game.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default GameGrid