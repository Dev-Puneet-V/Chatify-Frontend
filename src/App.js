import {
  useState
} from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {  Routes, Route, Navigate, useNavigate } from "react-router-dom";
import {
  Chat,
  SignIn,
  SignUp
} from './components/pages';
import {
  rootTheme
} from './themes';
// write a program to add 2 number

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const handleAuthentication = () => {
    setLoggedIn(true);
  }
  return (
    <ThemeProvider theme={rootTheme}>
      <div>
      <Routes>
        <Route path='login' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='home' element={<Chat />} />
      </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
