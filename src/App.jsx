import { Grid, GridItem, Show } from '@chakra-ui/react'
import './App.css'

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
        <GridItem area="nav" bg="coral" p={4}>
          Nawigacja
        </GridItem>
        <GridItem area="aside" bg="gold" p={4} display={{ base: "none", lg: "block" }}>
          Panel boczny
        </GridItem>
        <GridItem area="main" bg="dodgerblue" p={4}>
          Główna treść
        </GridItem>
      </Grid>
    </>
  )
}

export default App
