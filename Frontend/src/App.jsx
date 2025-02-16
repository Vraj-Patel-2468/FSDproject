import { useContext } from "react";
import Counter from "./components/Counter";
import { ThemeContext } from "./contexts/ThemeContext";
import { Button } from '@mantine/core';


export default function App() {
  
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
      <h1>{theme}</h1>
      <Button onClick={() => setTheme(prev => prev=="light"?"dark": "light")}>Change Theme</Button>
    </>
  )
}