/**
 * Learning module in the language leraning process (intro, greetings1, greetings2, people, animals, ...)
 * Contains the following components:
 * - Phrase test: User must translate a phrase from "language A" to "language B"
 * - Image test: User sees a word in "language A" and must pick an image (captioned in "language B") which corresponds to the word
 */
import React from 'react';
import PhraseTest from './PhraseTest'
import ImageTest from './ImageTest'
import style from './../styles/StyledModule'

const Module = () => {

  const { Container } = style

  return (
    <Container>
      <div>Progress</div>
      <PhraseTest />
    </Container>
  )
}
 
export default Module
