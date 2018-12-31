import React from 'react'


const LanguageListThumb = ({
  className,
  languages,
  onChange,
}) => {
  return (
    <ul className={className}>
      {
        languages.map(lang => {
          return (
            <li className="lang-list__li" key={lang.id}>
              <input 
                type="radio"
                id={lang.id}
                name="langSelector"
                value={lang.name}
                onChange={()=>onChange(lang)}
                className="lang-list__input"
              />
              <label
                htmlFor={lang.id}
                className="lang-list__label"
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
 
export default LanguageListThumb