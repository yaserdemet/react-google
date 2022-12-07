import React from 'react'
import {useState, useEffect, FC} from "react"

const useCheckInternet = () => {
    const [checkInternet, setCheckInternet] = useState(true)

    useEffect(() => {
        const checkInternet = () => {
          if(navigator.onLine){
            setCheckInternet(true)
          }
          else {
            setCheckInternet(false)
          }
        }
        checkInternet()
       },[])
  

       return {checkInternet}
 
}

export default useCheckInternet
