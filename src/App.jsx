import { Grid, GridItem, HStack } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'

function App() {
  const [gameQuery, setGameQuery] = useState({genre: null, platform: null})

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`
        }}
        gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr"
        }}
        gap={4}
        p={4}
        px={5}
      >
        <GridItem area="nav" p={10}>
          <Navbar />
        </GridItem>
        <GridItem area="aside" bg="gold" p={4} display={{ base: "none", lg: "block" }}>
          <GenreList onSelectGenre={setGameQuery} selectedGenre={gameQuery.genre} />
        </GridItem>
        <GridItem area="main" bg="dodgerblue" p={4}>
          <h2>Lista gier</h2>
          <br/>
          <HStack gap={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector onSelectPlatform={setGameQuery}/>
            <SortSelector />
          </HStack>
          <GameGrid selectedGenre={gameQuery.genre} selectedPlatform={gameQuery.platform} />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
