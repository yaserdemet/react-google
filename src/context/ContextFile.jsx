import React from 'react'
import { createContext, useContext , useState} from 'react'

export const CreatedContext = createContext()
export const consumeContext = () => {

    return useContext(CreatedContext)
}

const url = 'https://google-search3.p.rapidapi.com/api/v1';

const ContextFile = ({children}) => {
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")


    const

  return (
    <CreatedContext.Provider value={{data,setData,}}>
            {children}
    </CreatedContext.Provider>
  )
}

export default ContextFile