import axios from 'axios'
import React from 'react'
import { createContext, useContext , useState} from 'react'


export const CreatedContext = createContext()
export const useConsumeContext = () => {

    return useContext(CreatedContext)
}



const ContextFile = ({children}) => {
 
   
    const [dark , setDark] = useState(false)
    const [data , setData] = useState([])
    const [img , setImg] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchValue, setSearchValue] = useState("")
    const url = `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchValue}`;
    const imageUrl = `https://google-search3.p.rapidapi.com/api/v1/image/q=${searchValue}`;

    const getImageFromApi = async ()=> {
      setLoading(true)
  
      const res = await axios.get(`${imageUrl}` , {
          headers : {
          'x-user-agent': 'desktop',
          'x-rapidapi-host' : 'google-search3.p.rapidapi.com' ,
          'x-rapidapi-key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vkjsnK4bkzuUzVLzA'
  }})

        setImg(res.data)
        setLoading(false)

    }

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
    <CreatedContext.Provider value={{getImageFromApi, img , setImg, data, dark , setDark, setData, loading, setLoading,  getDataFromApi,searchValue,setSearchValue}}>
            {children}
    </CreatedContext.Provider>
  )
}

export default ContextFile