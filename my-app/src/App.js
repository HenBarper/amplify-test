import './App.css';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
// import awsExports from './aws-exports';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

// Amplify.configure(awsExports);
Amplify.configure(awsconfig);

export default function App() {
  // const signOut = async () => {
  //   try {
  //     await Auth.signOut();
  //   } catch (error) {
  //     console.error(`Error signing out: ${error}`);
  //   }
  // }
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header className="App-header">
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign Out</button>
          </header>
        </div>
      )}
    </Authenticator>
  );
}

// export default withAuthenticator(App);
