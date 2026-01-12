import React, { useState } from "react";
import Home from "./Home";
import MyStock from "./MyStock";
import FooterNav from "./FooterNav";
import { Box, Typography } from "@mui/material";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "stock":
        return <MyStock />;
      case "sale":
        return <Typography sx={{ p: 3 }}>New Sale (Coming Soon)</Typography>;
      case "customers":
        return <Typography sx={{ p: 3 }}>Customers (Coming Soon)</Typography>;
      default:
        return <Home />;
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
     
      <Box sx={{ flexGrow: 1 }}>
        {renderPage()}
      </Box>


      <FooterNav
        value={page}
        onChange={setPage}
        onLogout={onLogout}
      />
    </Box>
  );
};

export default Dashboard;
