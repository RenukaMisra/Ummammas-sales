import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  Divider,
} from "@mui/material";

const products = [
  { id: 1, name: "Rice Bag", qty: 50 },
  { id: 2, name: "Wheat Flour", qty: 30 },
  { id: 3, name: "Sugar", qty: 20 },
  { id: 4, name: "Cooking Oil", qty: 15 },
];

const MyStock: React.FC = () => {
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: "#f8f8f8",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={3}
        sx={{ color: "#b71c1c" }}
      >
        My Stock
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 3 }}>
        <List>
          {products.map((item, index) => (
            <React.Fragment key={item.id}>
              <ListItem
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 2,
                }}
              >
                
                <Box>
                  <Typography fontWeight="bold">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Product ID: {item.id}
                  </Typography>
                </Box>

               
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ color: "#b71c1c" }}
                  >
                    {item.qty}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Available Qty
                  </Typography>
                </Box>
              </ListItem>

              {index !== products.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default MyStock;
