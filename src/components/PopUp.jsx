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
  top: "30%",
  right: "-10%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "#2b2929",
//   border: "2px solid #000",
  p: 4,
  zIndex: "3",

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
        <div  className="d-flex w-100 flex-row justify-content-center align-items-center gap-2">

        <span className="d-flex flex-column align-items-center  text-white">
          <YouTubeIcon />
          <span>Youtube</span>
        </span>

        <span className="d-flex flex-column align-items-center  text-white">
          <GTranslateIcon />
          <span>Translate</span>
        </span>

        <span className="d-flex flex-column align-items-center  text-white">
          <ShopIcon />
          <span>Google Store</span>
        </span>


        </div>

        <div  className="d-flex flex-row w-100 justify-content-center align-items-center gap-4">

        <span className="d-flex flex-column align-items-center  text-white">
          <CalendarMonthIcon color="white" />
          <span>Calendar</span>
        </span>

        <span className="d-flex flex-column align-items-center text-white">
          <MyLocationIcon />
          <span>Maps</span>
        </span>

        <span className="d-flex flex-column align-items-center  text-white">
          <PlayArrowIcon />
          <span>Google Play</span>
        </span>

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
