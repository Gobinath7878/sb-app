import { useState } from "react";
import { ProSidebarProvider, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useNavigate} from "react-router-dom";
import { tokens } from "../../theme";
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeedIcon from '@mui/icons-material/Speed';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TableChartRoundedIcon from '@mui/icons-material/TableChartRounded';
import AddIcon from '@mui/icons-material/Add';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Button from "@mui/material/Button";

// const Item = ({ title, to, icon, selected, setSelected }) => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
 
//   return (
//     <MenuItem
//       active={selected === title}
//       style={{
//         color: colors.grey[100],
//       }}
//       onClick={() => setSelected(title)}
//       icon={icon}
//     >
//       <Typography>{title}</Typography>
//       <Link to={to} />
//     </MenuItem>
//   );
// };

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.blueAccent[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "blueAccent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebarProvider collapsed={isCollapsed}>
        <Menu iconShape="square">
         
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="10px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                <SentimentSatisfiedAltIcon/>SB ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
           <hr/>
            <div className="btn-sidebar">
            <Button color="inherit" onClick={() => navigate("/")}>
            <SpeedIcon/><Typography >Dashboard</Typography>
            </Button>
            <Typography
              variant="h6"
              color={colors.grey[700]}
              textAlign='center'
            >
            <hr/>INTERFACE
            </Typography> 
            
            <select className="form-select">
            <option>Components</option>
              <option onClick={() => navigate("/cards")}>Cards</option>
              <option onClick={() => navigate("/buttons")}>Buttons</option>
            </select>

            <select className="form-select">
            <option>Utilities</option>
              <option onClick={() => navigate("/colors")}>Colors</option>
              <option onClick={() => navigate("/borders")}>Borders</option>
            </select>
           
           

            <Button color="inherit" onClick={() => navigate("/form")}>
            <AddIcon/><Typography>Add </Typography>
            </Button>

            <Typography
              variant="h6"
              color={colors.grey[700]}
              textAlign='center'
            >
            <hr/>ADDONS
            </Typography> 

            <select className="form-select">
            <option>Pages</option>
              <option onClick={() => navigate("/")}>Login</option>
              <option onClick={() => navigate("/")}>Register</option>
              <option onClick={() => navigate("/")}>Forgot Password</option>
            </select>

            <Button color="inherit" onClick={() => navigate("/chart")}>
            <EqualizerIcon/><Typography>Charts</Typography>
            </Button>
            <Button color="inherit" onClick={() => navigate("/table")}>
            <TableChartRoundedIcon/><Typography>Tables</Typography>
            </Button>

            </div>
            

          </Box>
        </Menu>
      </ProSidebarProvider>
    </Box>
  );
};

export default Sidebar;
