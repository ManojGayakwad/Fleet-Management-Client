
import React from 'react';
import Dashboard from './Dashboard/Dashboard';
 import ridiptLogo from '../assets/ridipt1.png'
import {
  ChakraProvider,
  Box,
  Heading,
  Text,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  extendTheme,
  AbsoluteCenter,
  useMediaQuery
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg:' radial-gradient(circle at center bottom, rgb(29, 102, 92), rgb(29, 37, 44) 40%); min-height: 100vh; width: 100vw;'
        // bg:"#003153"
         bg: '#fdf5e6', //  background color
      },
    },
  },
});

const ContactUsPage = () => {
    const [isMediumScreen] = useMediaQuery("(max-width: 66em)"); // Detect medium screen
    const [isSmallScreen] = useMediaQuery("(max-width: 30em)");
  return (
    <>
    <Dashboard />
      <div style={{position:"relative", marginTop:"relative",  width:"80%", marginLeft:"auto"}}>
    <ChakraProvider theme={theme}>
      <Box p="8" textAlign="center">
        <Box p="14" bg="green.500" borderRadius="xl" boxShadow="2xl" w="100%" height="30%">
        <Heading mb="4" fontSize={isMediumScreen ? "1xl" : "5xl"} color="white" fontFamily="sans-serif" justifyContent="center">
          Contact Us
        </Heading>
        <Text fontFamily="cursive" fontSize={isMediumScreen ? "sm" : "lg"} fontWeight="bold" color="white">Got a Question? We are here to help !</Text>
        </Box>
        <Divider mb="6" />

        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
         
          <Box
            width={['100%', '48%']}
            p="14"
            borderRadius="md"
            // bg="#b9e9db" 
            bg="gray.100"
            boxShadow="lg"
            mb="8"
            height="150%"
            overflow="hidden"
                     
            >
         <Heading as="h2" size={isMediumScreen ? "sm" : "lg"} mb="4" color="teal.500" fontFamily="Courier" marginLeft="auto">Ridipt Technologies</Heading>
         <Box  width={['150%', '90%']} mb="4" bg="#add8e6" display="flex" flexWrap="wrap" boxShadow="lg" borderRadius="md"  height="90%" p="10" overflow="hidden">
            <Text  fontsize={isMediumScreen ? "lg" : "3xl"} color="gray.700" fontFamily="revert-layer" fontWeight="800" p="4" marginLeft="15%" as="b" >
               <u>  Varun Satija </u>
            </Text>
             <br />
            <address fontsize={isMediumScreen ? "sm" : "xl"}> 
             Gurukripa, Office No. 3,
              <br />
              behind Maratah Mandir lane, Bavdhan,
              <br />
              Pune,411052
              <br />
              Phone: (123) 456-7890
            </address>
            </Box>
          </Box>

          
          <Box width={['100%', '40%']} p="6" borderRadius="md" bg="white" boxShadow="md" height="50%" >
            <FormControl mb="4">
              <FormLabel htmlFor="name">Your Name</FormLabel>
              <Input type="text" id="name" name="name" />
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="email">Your Email</FormLabel>
              <Input type="email" id="email" name="email" />
            </FormControl>
            <FormControl mb="4">
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <Textarea id="message" name="message" rows="4" />
            </FormControl>
            <Button colorScheme="teal" size="lg" mt="4" w="100%">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
    </div>
    </>
  );
};

export default ContactUsPage;
