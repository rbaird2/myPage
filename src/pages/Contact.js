import Email from "../assets/email.jpg";
import "../styles/Contact.css";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";

function Contact() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [textName, setNameState] = useState("");
  const [textEmail, setEmailState] = useState("");
  const [textMessage, setMessageState] = useState("");

  const handleOpenDialog = (e) => {
    setDialogOpen(true);
    setNameState("");
    setEmailState("");
    setMessageState("");
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Email})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Me</h1>
        <div className="contact-form">
          <TextField
            label="Full Name"
            variant="standard"
            value={textName}
            onChange={(e) => setNameState(e.target.value)}
            placeholder="Enter full name"
          />
          <TextField
            label="Email"
            variant="standard"
            value={textEmail}
            onChange={(e) => setEmailState(e.target.value)}
            placeholder="Enter email"
          />
          <TextField
            label="Message"
            variant="standard"
            value={textMessage}
            onChange={(e) => setMessageState(e.target.value)}
            multiline
            rows={6}
            placeholder="Enter message"
          />
          <Button variant="contained" onClick={handleOpenDialog}>
            Send Message
          </Button>
          <Dialog open={dialogOpen} onClose={handleCloseDialog}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Thank you. The message isn't actually being sent at this time, however.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} autoFocus>
                CLOSE
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Contact;
