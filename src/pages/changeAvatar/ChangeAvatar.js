import React, { useState } from "react";
import "./changeAvatar.css";
import { ChangeAvatarUser } from "../../helpers/api-helper/user";
import { Spinner } from "react-bootstrap";
import {
  Alert,
  CssBaseline,
  Snackbar,
  Typography,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ChangeAvatar = () => {
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [open, setOpen] = useState(true);

  const handelChange = (e) => {
    setError("");
    setIsSubmitted(false);
    setImage(e.target.files[0]);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profile-image", image);
    setIsLoading(true);
    setError("");
    ChangeAvatarUser(
      formData,
      () => setIsSubmitted(true),
      (error) => setError(error.data),
      () => setIsLoading(false)
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container className="login" component="main" maxWidth="md">
      {error && (
        <Snackbar open={open}>
          <Alert variant="filled" severity="error" onClose={handleClose}>
            {error}
          </Alert>
        </Snackbar>
      )}
      {isSubmitted && (
        <Snackbar open={open}>
          <Alert variant="filled" severity="success" onClose={handleClose}>
            submitted Successful!
          </Alert>
        </Snackbar>
      )}
      <CssBaseline />
      <Box className="box-avatar">
        <Avatar className="avatar-avatar">
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Change Avatar
        </Typography>
        <Box className="grid-avatar">
          <form onSubmit={onSubmitHandler}>
            <input onChange={handelChange} type="file" />
            <button type="submit" className="btn btn-primary">
              <PhotoCamera />
              {isLoading ? (
                <Spinner animation="grow" variant="secondary" />
              ) : (
                "Upload Image"
              )}
            </button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default ChangeAvatar;
