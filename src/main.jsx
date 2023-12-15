import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
// import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {/* <Auth0Provider
          domain="dev-ni1cmgs0cu6e2atq.us.auth0.com"
          clientId="8U93T854YyFDfmlND4WGNVwqA68JRfSK"
          redirectUri={window.location.origin}
        > */}
          <App />
        {/* </Auth0Provider> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);


