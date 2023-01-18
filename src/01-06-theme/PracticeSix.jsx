import React, {useState} from 'react'
import { ThemeProvider } from 'styled-components';
import Button from './components/Button';

const PracticeSix = () => {
  const [theme, setTheme] = useState({
    primaryColor: '#1da1f2',
  }
  )

  const hnadleColorChange = (e) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      primaryColor: e.target.value,
    }))
  }

  // const theme = {
  //   primaryColor: '#1da1f2',
  // }


  return (
    <ThemeProvider theme={theme}>
      <select value={theme.primaryColor} onChange={hnadleColorChange}>
        <option value="#1da1f2">blue</option>
        <option value="#ffa800">yellow</option>
        <option value="#f5005c">red</option>
      </select>
      <Button>테마를 확인해보자</Button>
    </ThemeProvider>
  )
}

export default PracticeSix;
