import { useContext } from "react";
import Counter from "./components/Counter";
import { ThemeContext } from "./contexts/ThemeContext";
import { Button } from '@mantine/core';
import Landing_page from './pages/landing_page'

export default function App() {
  
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
    <Landing_page/>
    </>
  )
}