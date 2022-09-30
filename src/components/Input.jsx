import React, { useEffect, useRef } from 'react'
import { useConsumeContext } from '../context/ContextFile';
import { useNavigate } from 'react-router-dom';

const Input = () => {
    const navigate = useNavigate()
    const myRef = useRef();

    const {
     
        searchValue,
        setSearchValue,
        getDataFromApi
        
      } = useConsumeContext();

  
    
    useEffect(()=>{
        myRef.current.focus()
    },[])
  
    const handleEnter = (e) =>{

     

         if(e.keyCode == 13) {
            getDataFromApi()
            navigate("/results")
         
        }
    }
  
  return (
    <div>
        <div className="input-group mb-3 w-50 mt-3 m-auto">
          <input
            type="search"
            className="form-control rounded-5"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            ref={myRef}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={ handleEnter}
          />
        </div>
    </div>
  )
}

export default Input