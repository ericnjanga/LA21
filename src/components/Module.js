/**
 * Learning module in the language leraning process (intro, greetings1, greetings2, people, animals, ...)
 */
import React from 'react';
import style from './../styles/StyledModule';

const Module = () => {

  const { Container } = style

  return (
    <Container>
      <div>Progress</div>
      <h1 className="module-title">Traduit cette phrase</h1>
    </Container>
  )
}
 
export default Module
