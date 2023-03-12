import BannerImage from "../assets/zen3.jpg";
import "../styles/Home.css";
import { ExternalLink } from 'react-external-link';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Raymond Lee Baird </h1>
        <h2>ReactJS Front End</h2>
        <Button variant="contained" onClick={handleOpenDialog}>
          CLICK ME
        </Button>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Hello.<br/>
              This front end was created using ReactJS, MUI, CSS, and HTML5. The GitHub repository can be reached
              <ExternalLink href="https://github.com/rbaird2/myPage"> HERE</ExternalLink>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} autoFocus>
              OKAY
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Home;
