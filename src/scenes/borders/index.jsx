import { Box, Button,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Header from "../../components/Header";


const Borders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="BORDER" subtitle="Welcome to border World" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Borders 
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 2fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="red"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="green"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="yellow"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="brown"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="orange"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="navy"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          
        </Box>
      </Box>
      
    </Box>
    
  );
};

export default Borders;
