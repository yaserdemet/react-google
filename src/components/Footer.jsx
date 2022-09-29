import React from 'react'

const Footer = () => {
  return (
    <footer className='fixed-bottom bg-dark text-white text-center p-2'>
      GOOGLE INC,
        {
              new Date().getFullYear()
        }
    </footer>
  )
}

export default Footer