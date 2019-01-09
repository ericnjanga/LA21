import React from 'react'


const ListOfLanguageThumb = ({
  className,
  languages,
  activeLanguage,
  onChange,
}) => {

  // console.group('ListOfLanguageThumb')
  // console.log(activeLanguage)
  // console.groupEnd()

  return (
    <ul className={`list ${className}`}>
      {
        languages.map(lang => {
          return (
            <li className="list__li" key={lang.id}>
              <input 
                type="radio"
                id={lang.id}
                name="langSelector"
                value={lang.name}
                onChange={()=>onChange(lang)}
                className="list__input"
              />
              <label
                htmlFor={lang.id}
                className="list__label"
              >
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
  )
}
 
export default ListOfLanguageThumb