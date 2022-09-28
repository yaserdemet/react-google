import React from 'react'
import { useConsumeContext } from '../contextApi/SearchValue'

const RequestApi = () => {
    const {inputValue, setInputValue} = useConsumeContext()

  return (
    <div>RequestApi</div>
  )
}

export default RequestApi