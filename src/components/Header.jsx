import React from 'react'
import { Link } from 'react-router-dom'
import AppsIcon from '@mui/icons-material/Apps';
// import headerStyle from "../Sass/header.scss"
const Header = () => {
  return (
    <div>
            <div className='header-left'>
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <Link to="">    
                    <AppsIcon />     
                </Link>

            </div>


    </div>
  )
}

export default Header