import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Buttons from "./scenes/buttons";
import Cards from "./scenes/cards";
import Colors from "./scenes/colors";
import Borders from "./scenes/borders"
import Contacts from "./scenes/table";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Table from "./scenes/table";
import Chart from "./scenes/chart";
import FAQ from "./scenes/faq";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  // const navigate = useNavigate();


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/buttons" element={<Buttons />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/borders" element={<Borders />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/chart" element={<Chart />} />
              <Route path="/table" element={<Table />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
