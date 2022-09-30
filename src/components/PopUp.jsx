import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import ShopIcon from "@mui/icons-material/Shop";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GroupsIcon from "@mui/icons-material/Groups";

const style = {
  position: "absolute",
  top: "10%",
  right: "2%",
  width: 350,
  bgcolor: "#2b2929",
  p: 4,
  zIndex: "3",
  borderRadius : "10px",
  display: "flex",
  gap: "1rem",
  flexWrap: "wrap",
  justifyContent : "center"
};

export default function KeepMountedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box sx={style}>
        <div  className="d-flex w-100 flex-row justify-content-center align-items-center gap-3 ">

        <a target="_blank" href="https://www.youtube.com/?hl=tr&gl=TR" className="d-flex flex-column align-items-center  text-white hovered">
          <YouTubeIcon />
          <span>Youtube</span>
        </a>

        <a href="https://translate.google.com" target="_blank" className="d-flex flex-column align-items-center  text-white hovered">
          <GTranslateIcon />
          <span>Translate</span>
        </a>

        <a href="https://store.google.com/regionpicker" target="_blank" className="d-flex flex-column align-items-center  text-white hovered">
          <ShopIcon />
          <span>Google Store</span>
        </a>


        </div>

        <div  className="d-flex flex-row w-100 justify-content-center align-items-center gap-4">

        <a href = "https://calendar.google.com/calendar/u/0/r" target="_blank" className="d-flex hovered flex-column align-items-center  text-white">
          <CalendarMonthIcon color="white" />
          <span>Calendar</span>
        </a>

        <a href="https://www.google.com/maps" target="_blank" className="d-flex flex-column hovered align-items-center text-white">
          <MyLocationIcon />
          <span>Maps</span>
        </a>

        <a href="https://play.google.com/store/games?gl=TR" target="_blank" className="d-flex hovered flex-column align-items-center  text-white">
          <PlayArrowIcon />
          <span>Google Play</span>
        </a>

        </div>
      
{/*       
        <span className="d-flex flex-column align-items-center">
          <GroupsIcon />
          <span>Google Meet</span>
        </span> */}
      </Box>
    </div>
  );
}
