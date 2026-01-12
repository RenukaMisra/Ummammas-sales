import React from "react";
import {
  Box,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const summaryData = [
  { title: "Today's Sale", value: "₹12,000" },
  { title: "Today's Credit", value: "₹5,000" },
  { title: "Cash in Hand", value: "₹8,000" },
  { title: "Expense", value: "₹2,000" },
];

const recentActivity = [
  { shop: "Ummamas Store", invoice: "INV-1023", amount: "₹1,500" },
  { shop: "Fresh Mart", invoice: "INV-1024", amount: "₹2,300" },
  { shop: "Daily Needs", invoice: "INV-1025", amount: "₹980" },
  { shop: "Green Shop", invoice: "INV-1026", amount: "₹3,200" },
];

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", p: 3 }}>
  
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={3}
        sx={{ color: "#b71c1c", textAlign: "center" }}
      >
        Dashboard
      </Typography>

     
      <Box
        sx={{
          maxWidth: 650,     
          mx: "auto",        
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          mb: 5,
        }}
      >
        {summaryData.map((item) => (
          <Paper
            key={item.title}
            elevation={2}
            sx={{
              flex: "1 1 calc(50% - 16px)",
              height: 110,
              p: 2,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="body2" color="text.secondary">
              {item.title}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#b71c1c", mt: 0.5 }}
            >
              {item.value}
            </Typography>
          </Paper>
        ))}
      </Box>

      
      <Typography
        variant="h5"
        fontWeight="bold"
        mb={2}
        sx={{ color: "#b71c1c" }}
      >
        Recent Activity
      </Typography>

      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <List>
          {recentActivity.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                secondaryAction={
                  <Typography fontWeight="bold" sx={{ color: "#b71c1c" }}>
                    {item.amount}
                  </Typography>
                }
              >
                <ListItemText
                  primary={item.shop}
                  secondary={`Invoice: ${item.invoice}`}
                />
              </ListItem>
              {index !== recentActivity.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Home;
