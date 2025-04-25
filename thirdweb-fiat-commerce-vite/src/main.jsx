import { ThirdwebProvider } from 'thirdweb/react';
import App from './App';

function Root() {
  return (
    <ThirdwebProvider clientId="YOUR_CLIENT_ID">
      <App />
    </ThirdwebProvider>
  );
}

export default Root;