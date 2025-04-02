import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    <>
      <Grid
        templateAreas={`"nav nav"
                        "main side"
                        "main side"`}  
        templateRows={'50px 1fr 50px'}
        templateColumns={'1fr'}
        gap="1"
        p="4"
        minHeight='100vh'
      >
        <GridItem 
          pl="2"
          bg="blue.700"
          area={'nav'}
          borderRadius="md"
          display="flex"
          m="1"
          alignItems="center"
        >
          Wielka nawigacja
        </GridItem>
        <GridItem 
          pl="2"
          bg="red.700"
          area={'main'}
          borderRadius="md"
          display="flex"
          m="1"
          alignItems="center"
        >
          Główna sekcja
        </GridItem>
        <GridItem 
          pl="2"
          bg="yellow.700"
          area={'side'}
          borderRadius="md"
          display="flex"
          m="1"
          alignItems="center"
        >
          Boczny panel
        </GridItem>
      </Grid>
    </>
  )
}

export default App
