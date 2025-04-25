import  { ThirdwebProvider, PayEmbed } from "@thirdweb-dev/react";
import "./App.css";

function App() {
  return (
    <ThirdwebProvider clientId="05d4ba7f2fd3d230c2ee3bb54a257c85">
      <div className="App">
        <h1>T8020 Payment</h1>
        <PayEmbed
          clientId="05d4ba7f2fd3d230c2ee3bb54a257c85"
          theme="light"
          buyWithFiat={{
            testMode: true, // Set to false for production
            destination: {
              chainId: 137, // Polygon Mainnet (from your prior context)
              tokenAddress: "00xC0B53e8f255D0Cf2FA4303789C1b4a62D11392df", // Native Polygon
            },
            amount: "0.87", // Amount in Polygon
          }}
        />
      </div>
    </ThirdwebProvider>
  );
}

export default App;