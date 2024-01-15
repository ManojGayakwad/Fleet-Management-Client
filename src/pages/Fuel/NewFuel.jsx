import React, { useState } from "react";
// import { PhoneIcon, AddIcon,DownloadIcon,AttachmentIcon,QuestionOutlineIcon } from "@chakra-ui/icons";
import Dashboard from "../Dashboard/Dashboard";
import { vechileData } from "./vechiledata";
import {
  InputGroup,
  FormControl,
  FormLabel,
  Image,
  Radio,
  RadioGroup,
  CircularProgress,
  Text,
  Stack,
  useMediaQuery,
} from "@chakra-ui/react";
import car from "../../assets/car.jpeg";
// import "./NewFuel.css";
import "./NewFuel.css";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker.css";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {
  Box,
  Checkbox,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Input,
  Select,
  Flex,
} from "@chakra-ui/react";
// import { FaRightFromBracket } from "react-icons/fa6";
// import { withTheme } from "@emotion/react";
const NewFuel = () => {
  const [isMediumScreen] = useMediaQuery("(max-width: 66em)"); // Detect medium screen
  const [isSmallScreen] = useMediaQuery("(max-width: 30em)");

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (dates) => {
    console.log("before:", dates);
    // const date = new Date(dates * 1000); // Multiply by 1000 to convert to milliseconds
    const date = new Date("Thu Jan 04 2024 00:00:00 GMT+0530");
    console.log("after:", date);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const [value, setValues] = useState({});
  const fuelUsage = 7550;
  const distance = 43033;
  const time = 16255;

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours < 10 ? `0${hours}h` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}m` : minutes;
    const formattedSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}s` : remainingSeconds;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const filteredData = vechileData
    .filter((item) =>
      item.vehicle.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((item) => {
      if (startDate && endDate) {
        const itemDate = new Date(item.date);
        return itemDate >= startDate && itemDate <= endDate;
      }
      return true;
    });

  const sortedData = filteredData.sort((a, b) => {
    const comparison = a.time.localeCompare(b.time);
    return sortOrder === "asc" ? comparison : -comparison;
  });

  return (
    <>
      <Dashboard />
      {/* <div  style={{ marginTop: "20px",overflow:"hidden"}}> */}

      <Box p="3" mb="2" mt={isMediumScreen ? "70px" : "0"} 
       width={isSmallScreen ? "94%" : "90%"} height={isMediumScreen ? "70vh":"auto"} position="relative" fontFamily="arial" borderRadius={isSmallScreen ? "5px" : "10px"} overflow="auto"
      //  left={isSmallScreen ? "10px" : "-moz-initial"}
       >
      <Box
        // mx={5}
        mt={10}
        overflow="auto"
        marginLeft={isMediumScreen ? "8px" : "260px"}
         minWidth={isMediumScreen ? "100%" : "80%"}
        //minWidth="100%"
        position="relative"
        display="flex"
      >
        {/* <Heading size={{ base: "md", md: "lg" }}>Fuel</Heading> */}

        <Box border="1px solid gray" backgroundColor={"gray.100"}>
          <Box>
            {/* Circular background */}
            <Heading size={{ base: "md", md: "lg" }}>Fuel Efficiency</Heading>
            <br />

            {/* Pie chart --start */}

            <Flex
              direction={{ isMediumScreen: "column", isSmallScreen: "row" }}
              justify="space-between"
              p={4}
              flexWrap="wrap"
            >
              {/* Fuel Usage */}

              {/* <Flex
                display="flex"
                flexDirection={isSmallScreen ? "column" : "row"}
                ml={5}
                gap={5}
              > */}
                <Box
                  // className="container"
                  position="relative"
                  border="1px"
                  borderRadius="15px"
                  w={{ base: '100%', md: '30%' }}
                  p={2}
                  mb={5}
                >
                  <Flex direction="column" p={2}>
                    <Box textAlign="left" display="flex" gap={20}>
                      <Box display="flex" flexDirection="column">
                        <Text fontWeight="bold" fontSize="lg" mb={2}>
                          {fuelUsage.toLocaleString()} L <br />
                        </Text>
                        <Text fontWeight="bold" color="gray">
                          Fuel Usage
                        </Text>
                      </Box>

                      <CircularProgress
                        position="absolute"
                        right={0}
                        top="50%"
                        transform="translateY(-50%)"
                        value={(fuelUsage / 10000) * 100}
                        color="blue.500"
                        size="80px"
                        thickness="10px"
                        mr={5}
                      />
                    </Box>
                  </Flex>
                </Box>

                {/*pie chart distance  */}

                <Box
                  // className="container"
                  position="relative"
                  border="1px"
                  borderRadius="15px"
                  // w={isMediumScreen ? "30%" : "30%"}
                  w={{ base: '100%', md: '30%' }}
                  p={2}
                  mb={5}
                >
                  <Flex direction="column" p={2}>
                    <Box textAlign="left" display="flex" gap={20}>
                      <Box display="flex" flexDirection="column">
                        <Text fontWeight="bold" fontSize="lg" mb={2}>
                          {distance.toLocaleString()} Km <br />
                        </Text>
                        <Text fontWeight="bold" color="gray">
                          Distance
                        </Text>
                      </Box>

                      <CircularProgress
                        position="absolute"
                        right={0}
                        top="50%"
                        transform="translateY(-50%)"
                        value={(distance / 100000) * 100}
                        color="blue.500"
                        size="80px"
                        thickness="10px"
                        mr={5}
                      />
                    </Box>
                  </Flex>
                </Box>
                {/* pie chart time */}
                <Box
                  // className="container"
                  position="relative"
                  border="1px"
                  borderRadius="15px"
                  w={{ base: '100%', md: '30%' }}
                   p={2}
                   mb={5}
                >
                  <Flex direction="column" p={2}>
                    <Box textAlign="left" display="flex" gap={20}>
                      <Box display="flex" flexDirection="column">
                        <Text fontWeight="bold" fontSize="lg" mb={2}>
                          {formatTime(time)} <br />
                        </Text>
                        <Text fontWeight="bold" color="gray">
                          Ideal Time
                        </Text>
                      </Box>

                      <CircularProgress
                        position="absolute"
                        right={0}
                        top="50%"
                        transform="translateY(-50%)"
                        value={time / 3600}
                        color="blue.500"
                        size="80px"
                        thickness="10px"
                        mr={5}
                      />
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            {/* Pie chart --End */}
          </Box>
          <FormControl mt={5} ml={2} className="formControl">
            <FormLabel>Date</FormLabel>

            <Flex mb={4}>
              {/* <Box mb={4} mr={15} w={1000}> */}
              <DatePicker
                className={"datePicker"}
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                dateFormat="dd/MM/yyyy"
              />
              <Input
                className="searchInput"
                w={"30%"}
                placeholder="Search by Vehicle"
                value={searchTerm}
                onChange={handleSearch}
                mb={4}
                ml={50}
                mr={50}
              />
              <Select
                onChange={handleSort}
                mb={4}
                w={"30%"}
                ml={15}
                className="sortSelect"
              >
                <option value="asc">Sort by Newest</option>
                <option value="desc">Sort by Oldest</option>
              </Select>
              {/* </Box> */}
            </Flex>
          </FormControl>

          <Table
            position="relative"
            // overflow="auto"
            // className="table"
            size="sm"
            // style={{
            //   width: "100%", // Adjust the width for smaller screens
            //   "@media screen and (maxWidth: 768px)": {
            //     maxWidth: "100%",
            //   },
            // }}
          >
            <Thead>
              <Tr>
                <Th>
                  <Checkbox
                    size="md"
                    colorScheme="green"
                    backgroundColor={"Window"}
                  />
                </Th>
                <Th>Vechile</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Usage</Th>
                <Th>Volume</Th>
                <Th>Total</Th>
                <Th>FE</Th>
                <Th>Cost</Th>
              </Tr>
            </Thead>
            <Tbody>
              {sortedData.map((item) => (
                <Tr key={item.id}>
                  <Td>
                    <Checkbox
                      size="md"
                      colorScheme="green"
                      backgroundColor={"Window"}
                    />
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Image
                        src={car}
                        alt="Vehicle Image"
                        // boxSize="50px"
                        border="1px solid black"
                        borderRadius="5px"
                        boxSize={{ base: "30px", md: "50px" }}
                      />

                      <Box ml={3}>
                        {item.vehicle}
                        <Td>
                          <RadioGroup
                            name={`statusRadioGroup-${item.id}`}
                            onChange={(value) =>
                              setValues({ ...value, [item.id]: value })
                            }
                            value={value[item.id] || ""}
                          >
                            <Stack direction="row">
                              <Radio
                                value="active"
                                isChecked={item.radioLabel === "Active"}
                              >
                                Active
                              </Radio>
                              <Radio
                                value="inactive"
                                isChecked={item.radioLabel === "Inactive"}
                              >
                                Inactive
                              </Radio>
                              <Radio
                                value="outOfService"
                                isChecked={item.radioLabel === "Out of Service"}
                              >
                                Out of Service
                              </Radio>
                              {/* Add more Radio components as needed */}
                            </Stack>
                          </RadioGroup>
                        </Td>
                      </Box>
                    </Flex>
                  </Td>
                  {/* <Td>{item.vehicle}</Td> */}
                  {/* <Td>{format(item.date)}</Td> */}
                  {/* <Td>{item.date}</Td> */}
                  <Td>{new Date(item.date).toLocaleDateString()}</Td>

                  <Td>{item.time}</Td>
                  <Td>{item.usage}</Td>
                  <Td>{item.volume}</Td>
                  <Td>{item.total}</Td>
                  <Td>{item.fe}</Td>
                  <Td>{item.cost}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
      {/* </div> */}
      </Box>
    </>
  );
};

export default NewFuel;
