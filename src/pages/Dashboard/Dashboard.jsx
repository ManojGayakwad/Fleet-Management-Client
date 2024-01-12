import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Heading,
  } from "@chakra-ui/react";
  import { FiMenu, FiBell, FiChevronDown, FiHome, FiPhoneIncoming } from "react-icons/fi";
  import { FaCarSide,FaHandsHelping  } from "react-icons/fa";
  import { MdOutlineEmojiPeople } from "react-icons/md";
  import { FaMapLocationDot } from "react-icons/fa6";

  // import { IconType } from 'react-icons'
  import { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import logo from "../../assets/logo2.png";

  
  const SidebarContent = (props) => {
    const { onClose, Role, AddCustomer, ...rest } = props;
  
    return (
      <Box
        transition="3s ease"
        fontFamily="Arial"
        
        bg={useColorModeValue("#425b73", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 56 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Link to="/dashboardContent">
          <Flex h="28" alignItems="center" mx="18" m="5"  justifyContent="space-between">
            <img alt="" src={logo}></img>
            <CloseButton
              display={{ base: "flex", md: "none" }}
              onClick={onClose}
            />
          </Flex>
        </Link>
        <>
          <Link to="/dashboardContent">
            <NavItem icon={FiHome}>Dashboard</NavItem>
          </Link>
          <Link to="/addVehicle">
            <NavItem icon={FaCarSide}>Add Vehicle</NavItem>
          </Link>
          
          <Link to="/addDriver">
            <NavItem icon={MdOutlineEmojiPeople}>Add Driver</NavItem>
          </Link>
          <Link to="/livelocation">
            <NavItem icon={FaMapLocationDot}>Live View</NavItem>
          </Link>
          <NavItem icon={FaHandsHelping }>Help</NavItem>

          <Link to="/contactUs">
            <NavItem icon={FiPhoneIncoming}>Contact Us</NavItem>
          </Link>
          
          </>
      </Box>
    );
  };
  
  const NavItem = ({ icon, children, ...rest }) => {
    return (
      <Box
        as="a"
        href="#"
        fontFamily="Arial"
        fontSize="18px"
        style={{ textDecoration: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <Flex
          align="center"
          p="3"
          mx="4"
          gap="4"
          color="white"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: "#5e7488",
            color: "white",
          }}
          {...rest}
        >
          {icon && (
            <Icon

            //   mr="4"
            //   fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    );
  };
  
  const MobileNav = ({ onOpen, ...rest }) => {
    // =================================================================================================
    // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
    return (
      <Flex
        ml={{ base: 0, md:56 }}
        px={{ base: 4, md: 4 }}
        height="12"
        alignItems="center"
        bg={useColorModeValue("white", "gray.900")}
        borderBottomWidth="1px"
        borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        justifyContent={{ base: "space-between", md: "flex-end" }}
        {...rest}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />
  
        <Text
          display={{ base: "flex", md: "none" }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
        >
          Logo
        </Text>
  
        <HStack spacing={{ base: "0", md: "6" }}>
          <HStack>hhefiuhdriughfdhgdhgioh</HStack>
          <Box position="relative">
            <IconButton
              size="lg"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
              // onClick={handleNotificationClick}
            />
          </Box>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
              >
                <HStack>
                  <Avatar
                    size={"sm"}
                    src={
                      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
                    }
                  />
                  <VStack
                    display={{ base: "none", md: "flex" }}
                    alignItems="flex-start"
                    spacing="1px"
                    ml="2"
                  >
                    <Text fontSize="md" color="black" fontWeight="bold">
                    Admin
                  </Text>
                  </VStack>
                  <Box display={{ base: "none", md: "flex" }}>
                    <FiChevronDown />
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList
                bg={useColorModeValue("white", "gray.900")}
                borderColor={useColorModeValue("gray.200", "gray.700")}
              >
                <MenuItem as={Link} to="/editprofile">
                  Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={(e) => logout()}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Flex>
    );
  };
  
  const Dashboard = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box minH="1vh" bg={useColorModeValue("gray.100", "gray.900")}>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
  
        <MobileNav onOpen={onOpen} />
        {/* <Box ml={{ base: 0, md: 60 }} p="4">
          
        </Box> */}
      </Box>
    );
  };
  
  export default Dashboard;
  