import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import ShopIcon from '@mui/icons-material/Shop';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MyLocationIcon from '@mui/icons-material/MyLocation';


const style = {
  position: 'absolute',
  top: '30%',
  right: '-10%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#2b2929',
  border: '2px solid #000',
  p: 4,
  zIndex : "3",
  
  display : "flex",
  gap : "1rem",
  flexWrap : "wrap"
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>


        <Box sx={style}>

          <span className='d-flex flex-column align-items-center'>
          <YouTubeIcon />
            <span>Youtube</span>
          </span>  

          <span className='d-flex flex-column align-items-center'>
          <GTranslateIcon />
            <span>Translate</span>
          </span>  

          <span className='d-flex flex-column align-items-center'>
          <ShopIcon  />
            <span>Google Store</span>
          </span>  

          <span className='d-flex flex-column align-items-center'>
          <CalendarMonthIcon />
            <span>Calendar</span>
          </span>  

          <span className='d-flex flex-column align-items-center'>
          <YouTubeIcon />
            <span>Youtube</span>
          </span>  

          <span className='d-flex flex-column align-items-center'>
          <YouTubeIcon />
            <span>Youtube</span>
          </span>  

        </Box>
      
    </div>
  );
}
