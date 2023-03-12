import BannerImage from "../assets/zen3.jpg";
import "../styles/Home.css";
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
        <h2>ReactJS Website Project</h2>
        <Button variant="contained" onClick={handleOpenDialog}>
          Hello
        </Button>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Hello to you.
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
