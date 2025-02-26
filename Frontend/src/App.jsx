import { useContext } from "react";
import Landing_page from "./pages/Landing_Page.jsx";
import { UserContext } from "./contexts/ThemeContext.jsx";
import DashBoard from "./pages/DashBoard.jsx";

export default function App() {  
  
  const { isLoggedIn } = useContext(UserContext);

  return (
    <>
      {isLoggedIn ? <DashBoard /> : <Landing_page/>}
    </>
  )
}