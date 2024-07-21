import './App.css';
import { Amplify } from 'aws-amplify';
import Auth from 'aws-amplify/auth';

import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {
  const signOut = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.error(`Error signing out: ${error}`);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>My App</h1>
        <button onClick={signOut}>Logout</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
