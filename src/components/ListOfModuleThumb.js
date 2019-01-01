import React from 'react'


const ListOfModuleThumb = ({
  className,
  modules,
  onChange,
}) => {
  return (
    <ul className={`list ${className}`}>
      {
        modules.map(mod => {
          return (
            <li className={`list__li ${!mod.disabled?``:`lowOpacity`}`}
              key={mod.id}
            >
              <input 
                type="radio"
                id={mod.id}
                name="modSelector"
                value={mod.name}
                onChange={()=>onChange(mod)}
                className="list__input"
                disabled={mod.disabled}
              />
              <label
                htmlFor={mod.id}
                className="list__label"
              >
                <figure className="thumbnail">
                  <img src={mod.img}/>
                  <figcaption className="thumbnail-caption">{mod.name}</figcaption>
                </figure>
              </label>
            </li>
          )
        })
      }
    </ul>
  )
}
 
export default ListOfModuleThumb