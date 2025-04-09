import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'

function App() {

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
          lg: "250px 1fr"
        }}
        gap={4}
        p={4}
      >
        <GridItem area="nav" p={4}>
          <Navbar />
        </GridItem>
        <GridItem area="aside" bg="gold" p={4} display={{ base: "none", lg: "block" }}>
          Panel boczny
        </GridItem>
        <GridItem area="main" bg="dodgerblue" p={4}>
          <h1>Lista gier</h1>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
