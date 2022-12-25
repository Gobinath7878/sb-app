import { Box, Button,useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="COLORS" subtitle="Welcome to Colors World" />

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
            Download Colors 
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
          <StatBox
            title="#bdbdbd"
            subtitle="grey"
            progress="1"
            increase="100%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="red"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#f44336"
            subtitle="red"
            progress="1"
            increase="100%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="green"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#33691e"
            subtitle="green"
            progress="1"
            increase="100%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="yellow"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#ffeb3b"
            subtitle="yellow"
            progress="1"
            increase="100%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="brown"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#795548"
            subtitle="Brown"
            progress="1"
            increase="100%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="black"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#263238"
            subtitle="Black"
            progress="1"
            increase="100%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="orange"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#ffc107"
            subtitle="Orange"
            progress="1"
            increase="100%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="navy"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="#311b92"
            subtitle="Navy Blue"
            progress="1"
            increase="100%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      
    </Box>
    
  );
};

export default Dashboard;
