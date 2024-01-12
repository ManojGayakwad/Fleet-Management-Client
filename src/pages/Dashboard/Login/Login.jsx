

 import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Text,
  Link,
} from '@chakra-ui/react';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handlePasswordVisibility = () => setShowPassword(!showPassword);
  const handleFormToggle = () => setIsLogin(!isLogin);

  const handleAuthAction = () => {
    const action = isLogin ? 'Login' : 'Signup';
    alert(`${action} clicked!`);
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!');
  };

  return (
    <Flex align="center" justify="center" height="100vh" margin="5px">

      <Box width="md" p={8} borderWidth={1} borderRadius={8} boxShadow="lg" bg="gray.100">

        <Heading mb={4} color="green.500"> {isLogin ? 'Login' : 'Signup'}</Heading>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl id="password" mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup>
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        {isLogin && (
          <Text mt={2} textAlign="right">
            <Link color="blue.500" onClick={handleForgotPassword}>
              Forgot Password?
            </Link>
          </Text>
        )}

        {!isLogin && (
          <FormControl id="confirmPassword" mt={4} isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input type="password" placeholder="Confirm your password" />
          </FormControl>
        )}

        <Button colorScheme="blue" width="full" mt={4} onClick={handleAuthAction}>
          {isLogin ? 'Log in' : 'Sign up'}
        </Button>

        <Text mt={4} textAlign="center" color="gray.500">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <Button colorScheme="blue" variant="link" size="sm" onClick={handleFormToggle} ml={1}>
            {isLogin ? 'Sign up' : 'Log in'}
          </Button>
        </Text>
      </Box>
    </Flex>
  );
};

export default Auth;


