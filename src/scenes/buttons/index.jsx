import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Header from '../../components/Header';
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const buttons = [
  <Button key="one">One</Button>,
  <Button key="two">Two</Button>,
  <Button key="three">Three</Button>,
];

export default function Buttons() {
  return (
    <div>

   
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 3,
        },
      }}
    >
        <Box display="flex" justifyContent="space-evenly" alignItems="center">
        <Header title="BUTTONS" subtitle="Welcome to Buttons World" />

        <Box>
          <Button
            sx={{
              color:"white",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              backgroundColor:"navy",
              ml:"100px"
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Buttons 
          </Button>
        </Box>
      </Box>
      
      


      <ButtonGroup color="secondary" aria-label="medium secondary button group">
        {buttons}
      </ButtonGroup>
     
      <IconButton aria-label="delete" disabled color="primary">
  <DeleteIcon />
</IconButton>
<IconButton color="secondary" aria-label="add an alarm">
  <AlarmIcon />
</IconButton>
<IconButton color="primary" aria-label="add to shopping cart">
  <AddShoppingCartIcon />
</IconButton>

      <ButtonGroup variant="contained" aria-label="outlined primary button group">
       <Button>One</Button>
       <Button>Two</Button>
       <Button>Three</Button>
      </ButtonGroup>

    </Box>

    
    
  
    </div>
  );
}