import { createContext, useState } from 'react'
import img from '../../public/photos.json'

export const Context = createContext({})

const Provider = ({children}) => {
  const [photos, setPhotos] = useState(img.photos)

  return(
    <Context.Provider value={{photos, setPhotos}}>
      {children}
    </Context.Provider>
  )
}

export default Provider;