import React from "react";
import "./notFound.css";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Typography, Container, Box } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container component="main" maxWidth="xs">
      <Box className="notFound">
        <Avatar className="notFound-avatar">
          <ErrorIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Oops!
        </Typography>
        <Typography component="h1" variant="h5">
          404 - Page NotFound
        </Typography>
        <Button
          className="button"
          variant="contained"
          onClick={() => navigate("/")}
        >
          GO TO HOMEPAGE
        </Button>
      </Box>
    </Container>
  );
};

export default NotFound;
