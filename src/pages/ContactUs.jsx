import React from 'react';
import { ChakraProvider, CSSReset, Box, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';

const App = () => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box as="head">
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/New.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ridipt Technologies</title>
        <script type="module" crossorigin src="/assets/index--HJL9SQ-.js"></script>
        <link rel="stylesheet" crossorigin href="/assets/index-NccxHIJv.css" />
        <style data-emotion="css" data-s=""></style>
      </Box>
      <Box as="body">
        <Flex
          id="root"
          direction="column"
          align="center"
          justify="flex-start"
          bgGradient="radial-gradient(circle at center bottom, rgb(29, 102, 92), rgb(29, 37, 44) 40%)"
          minH="100vh"
          minW="100vw"
          pt="20px"
          overflow="hidden"
        >
          <VStack spacing="10px" margin={['10px', '20px', '10px', '10px']} align="flex-start">
            <Flex
              className="main"
              ml="20px"
              borderRadius="16px"
              bgColor="rgb(249, 250, 250)"
              direction="column"
              align="center"
            >
              <Box
                className="logoBox"
                borderRadius="16px 16px 2px 2px"
                bgColor="rgb(46, 59, 71)"
                maxW="100%"
                maxH="100px"
                cursor="pointer"
              >
                <Image src="src/assets/ridipt1.png" alt="Logo" w="300px" mt="-75px" />
              </Box>
              <Heading color="rgb(29, 37, 44)" fontSize="1.2rem" fontFamily="Arial" margin="0px 30px">
                For Any Query Contact Us Today
              </Heading>
              <Box
                className="contactForm"
                margin="10px auto"
                w="90%"
                bgColor="rgb(249, 250, 250)"
                color="black"
                borderRadius="16px"
                boxShadow="rgba(84, 86, 90, 0.16) 0px 4px 32px"
              >
                <VStack className="MuiStack-root css-fb56kb" spacing="4">
                  <Text>Varun Satija</Text>
                  <Text>
                    Gurukripa, Office No. 3, behind Maratah Mandir lane, Bavdhan, Pune, Maharashtra 411021.
                  </Text>
                  <Text>Tel: 011 66481018</Text>
                  <Text>Fax: 011 66481003</Text>
                </VStack>
              </Box>
            </Flex>
          </VStack>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
