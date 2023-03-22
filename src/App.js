import {
  useState
} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ThemeProvider } from '@mui/material/styles';
import {
  Chat,
  Auth
} from './components/pages';
import {
  rootTheme
} from './themes';
function App() {
  const { user, loginWithRedirect, logout } = useAuth0();

  const [loggedIn, setLoggedIn] = useState(false);
  const handleAuthentication = () => {
    setLoggedIn(true);
  }

  return (
    <ThemeProvider theme={rootTheme}>
      <div>
        {
          // !user && 
          // <button onClick={(e) => {
          //   loginWithRedirect()
            
          // }} >
          //   Login with Redirect
          // </button>
        }
        {
          // user && 
          <>
            {/* <button onClick={(e) => {logout(); alert(JSON.stringify(user))}}>
              Logout
            </button> */}
          </>
        }
        {
          !loggedIn &&
          <Auth setAuth={handleAuthentication}/>
        }
        { loggedIn &&
          <Chat />
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
