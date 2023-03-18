import { useAuth0 } from '@auth0/auth0-react';
import {
  Chat
} from './components/pages';
function App() {
  const { user, loginWithRedirect, logout } = useAuth0();

  console.log('Cureent user', user);

  return (
    <div className="App">
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
        <Chat />
      }
    </div>
  );
}

export default App;
