import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";

interface FooterNavProps {
  value: string;
  onChange: (value: string) => void;
  onLogout: () => void;
}

const FooterNav: React.FC<FooterNavProps> = ({
  value,
  onChange,
  onLogout,
}) => {
  return (
    <Paper elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
        showLabels
      >
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
        <BottomNavigationAction label="New Sale" value="sale" icon={<AddShoppingCartIcon />} />
        <BottomNavigationAction label="My Stock" value="stock" icon={<InventoryIcon />} />
        <BottomNavigationAction label="Customers" value="customers" icon={<PeopleIcon />} />
      </BottomNavigation>

      {/* Logout */}
      <Box sx={{ p: 1, textAlign: "center" }}>
        <Button
          variant="outlined"
          color="error"
          size="small"
          onClick={onLogout}
        >
          Logout
        </Button>
      </Box>
    </Paper>
  );
};

export default FooterNav;
