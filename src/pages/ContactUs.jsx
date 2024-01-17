


import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import ridiptLogo from '../assets/ridipt1.png';
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
  useMediaQuery,
} from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
         bg: '#fdf5e6', // background color
      },
    },
  },
});

const ContactUsPage = () => {
  const [isMediumScreen] = useMediaQuery('(max-width: 66em)'); // Detect medium screen
  const [isSmallScreen] = useMediaQuery('(max-width: 30em)');

  return (
    <>
      <Dashboard />
      <div style={{ position: 'relative', marginTop: 'relative', width: '80%', marginLeft: 'auto' }}>
        <Box p="8" textAlign={isMediumScreen ? 'start' : 'center'}>
          <Box p="14" bg="green.500" borderRadius="xl" boxShadow="2xl" w="100%" minH="30vh">
            <Heading
              mb="4"
              fontSize={isMediumScreen ? '1xl' : '5xl'}
              color="white"
              fontFamily="sans-serif"
              justifyContent="center"
            >
              Contact Us
            </Heading>
            <Text fontSize={{ base: 'sm', md: 'xl' }} fontFamily="cursive" fontWeight="bold" color="white">
              Got a Question? We are here to help!
            </Text>
          </Box>
          <Divider mb="6" />
          <Box display="flex" flexDirection={{ base: 'column', md: 'row' }} justifyContent="space-between">
            <Box
              mb={{ base: '8', md: '0' }}
              borderRadius="md"
              bg="gray.100"
              boxShadow="lg"
              height="fit-content"
              overflow="hidden"
              p={4}
              flexBasis={{ base: '100%', md: '48%' }}
            >
              <Heading as="h2" size={isMediumScreen ? 'sm' : 'lg'} mb="4" color="teal.500" fontFamily="Courier">
                Ridipt Technologies
              </Heading>
              <Box mb="4" bg="#add8e6" boxShadow="lg" borderRadius="md" p="10" overflow="hidden">
                <Text fontSize={isMediumScreen ? 'lg' : '2xl'} color="gray.700" fontFamily="revert-layer" fontWeight="800">
                  <u>Varun Satija</u>
                </Text>
                <br />
                <Text fontSize={isMediumScreen ? 'sm' : 'xl'}>
                  Gurukripa, Office No. 3,
                  <br />
                  behind Maratah Mandir lane, Bavdhan,
                  <br />
                  Pune,411052
                  <br />
                  Phone: (123) 456-7890
                </Text>
              </Box>
            </Box>
            <Box
              p="6"
              borderRadius="md"
              bg="white"
              boxShadow="md"
              flexBasis={{ base: '100%', md: '50%' }}
              mt={{ base: '4', md: '0' }}
            >
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
      </div>
    </>
  );
};

export default ContactUsPage;

