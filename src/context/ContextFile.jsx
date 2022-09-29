import axios from 'axios'
import React from 'react'
import { createContext, useContext , useState} from 'react'


export const CreatedContext = createContext()
export const useConsumeContext = () => {

    return useContext(CreatedContext)
}



const ContextFile = ({children}) => {
 
   
    const [dark , setDark] = useState(true)
    const [data , setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}`;


    const getDataFromApi = async() => {
        


        setLoading(true)
        const res = await axios.get(`${url}` , {
            headers : {
            'x-user-agent': 'desktop',
            'x-rapidapi-host' : 'google-search3.p.rapidapi.com' ,
            'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bkzuUzVLzA'
    }})

        setData(res.data)
        setLoading(false)

    }
    // console.log(data);

  return (
    <CreatedContext.Provider value={{data, dark , setDark, setData, loading, setLoading,  getDataFromApi,searchValue,setSearchValue}}>
            {children}
    </CreatedContext.Provider>
  )
}

export default ContextFile