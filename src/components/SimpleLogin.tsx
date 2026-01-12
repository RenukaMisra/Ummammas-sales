import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import logo from "../assets/image-removebg-preview.png";
import bg from "../assets/bg.jpg";

interface SimpleLoginProps {
  onLogin: () => void;
}

const SimpleLogin: React.FC<SimpleLoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin();
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
          backgroundColor: "rgba(255,255,255,0.9)", 
        }}
      >
      
        <Box sx={{ mb: 2 }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: 120 }}
          />
        </Box>

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            required
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default SimpleLogin;
