import React from "react";
import ReactDOM from 'react-dom'

import Dashboard from "../../pages/Dashboard/Dashboard";
import { FaSun , FaMoon , FaFacebook , FaInstagram , FaLinkedin } from "react-icons/fa";
import { ChakraProvider ,
   VStack ,
   Flex , 
   Heading , 
   IconButton ,
   Spacer
  } from "@chakra-ui/react";
import { isDragActive } from "framer-motion";

const LiveView = () => {
  return (
    <>
    <Dashboard />
      <div style={{marginLeft:"260px", marginTop:"20px"}}>

        <h1>Live View</h1>
      </div>
    </>
  );
};

export default LiveView;





