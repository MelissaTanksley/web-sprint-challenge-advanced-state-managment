import React, { Component } from 'react'
import Container from './List/Container'
import Form from './Form/Form'

import styled from 'styled-components'

const AppContainer = styled.div`
  padding: 2%;
  text-align: center;
`
class App extends Component {

  render() {
    return (
      <AppContainer>
        <h1>Smurfs!</h1>
        <Form />
        <Container />
      </AppContainer>
    )
  }
}

export default App;
   