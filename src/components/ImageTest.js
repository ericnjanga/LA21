/**
 * - Image test: User sees a word in "language A" and must pick an image (captioned in "language B") which corresponds to the word
 */
import React from 'react'
// import style from './../styles/StyledModule'
const ImageTest = () => {

  // const { Container } = style

  return (
    <div>
      <h1 className="module-title">Traduit cette Image</h1>

      <Button
        variant="contained"
        color="primary"
        fullWidth
      >
        Vérifier
      </Button>
    </div>
  )
}
 
export default ImageTest