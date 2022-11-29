import React from 'react'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import {CategoriasProvider} from "./context/CategoriasProvider"
import {BebidasProvider} from "./context/BebidasProvider"
import ModaBebida from './components/ModaBebida'

const App = () => {
  return (
  <CategoriasProvider>
    <BebidasProvider>
    <header className='py-5'>
      <h1>Buscador de Beidas React</h1>
    </header>

    <Container>
      <Formulario/>
      <ListadoBebidas/>
      <ModaBebida/>
    </Container>
    </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App