import React from 'react'
import StyledLanguageSelector from './../styles/StyledLanguageSelector'
import img1 from './../media/img-la1.jpg'
import img2 from './../media/img-la2.jpg'
import img3 from './../media/img-la3.jpg'
import Button from '@material-ui/core/Button'

const LanguageSelector = () => {

  const { Container } = StyledLanguageSelector
  const languages = [
    // {
    //   id: 0,
    //   name: 'Bagangte',
    //   code: 'BG',
    // },
    {
      id: 1,
      name: 'Bulu',
      code: 'BU',
      img: img1,
    },
    {
      id: 2,
      name: 'Bassa',
      code: 'BA',
      img: img2,
    },
    // {
    //   id: 3,
    //   name: 'Douala',
    //   code: 'BL',
    // },
    {
      id: 4,
      name: 'Yemba',
      code: 'YB',
      img: img3,
    },
  ] // languages

  return (
    <Container>
      <h1 className="brand">T21</h1>
      <h2 className="title">Quelle langue veux-tu apprendre?</h2>
      <div>
        <ul className="lang-list">
          {
            languages.map(lang => {
              return (
                <li className="lang-list__li" key={lang.id}>
                  <input 
                    type="radio"
                    id={lang.id}
                    name="langSelector"
                    value={lang.name}
                    className="lang-list__input"
                  />
                  <label
                    htmlFor={lang.id}
                    className="lang-list__label"
                  >
                    {
                      console.log(lang.img)
                    }
                    <figure className="thumbnail">
                      <img src={lang.img}/>
                      <figcaption className="thumbnail-caption">{lang.name}</figcaption>
                    </figure>
                  </label>
                </li>
              )
            })
          }
        </ul>
        <footer className="container-footer">
          <Button
            variant="contained"
            color="primary"
            fullWidth
          >
            Continuer
          </Button>
        </footer>
      </div>
    </Container>
  )
}
 
export default LanguageSelector