import React, { useState } from "react";
import {
  Flex,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Box,
  Divider,
  InputGroup, Input, InputRightElement, Icon
} from "@chakra-ui/react";
import { Doughnut } from "react-chartjs-2";
import Dashboard from "../Dashboard";
import Chart from "react-apexcharts";
import { FiSearch } from "react-icons/fi";
import { FaEllipsisV } from "react-icons/fa";



const DashboardContent = () => {
  // Sample data for the pie chart
  const [activeTab, setActiveTab] = useState("day"); // Initialize with the default tab
  const [showSearchBox, setShowSearchBox] = useState(false);

  const toggleSearchBox = () => {
    setShowSearchBox(!showSearchBox);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  const vehicleStatusData = {
    series: [30, 45, 25],
  };

  const vehicleStatusOptions = {
    labels: ["Active Vehicles", "Offline Vehicles", "Critical Vehicles"],
    colors: ["#82b6a9", "#7ba0c2", "#f25e5e"],
    legend: {
      show: true,
      position: "bottom",
      fontFamily:"Arial"
    },
  };

  const distanceData = {
    series: [
      {
        name: "Average Distance",
        data: [50, 40, 60, 80, 45, 70, 55], // Replace this with your actual data
      },
      {
        name: "Highest Distance",
        data: [80, 65, 90, 100, 75, 110, 95], // Replace this with your actual data
      },
    ],
  };

  const distanceOptions = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    legend: {
      position: "top",
    },
    fill: {
      opacity: 1,
    },
    colors: ["#f25e5e", "#82b6a9"],
    fontFamily:"Arial",
  };

  // Placeholder data for revenue chart
  const revenueData = {
    series: [
      {
        name: "Revenue",
        data: [15000, 18000, 20000, 22000, 25000, 23000, 21000], // Replace this with your actual data
      },
    ],
  };

  const revenueOptions = {
    chart: {
      type: "bar",
      height: 450,
      
    },
    plotOptions: {
      bar: {
        horizontal: false,
      
      },
    },
    xaxis: {
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    legend: {
      position: "top",
      
    },
    fill: {
      opacity: 1,
    },
    colors: ["#82b6a9"],
  };


  const vehicleListData = [
    { id: 1, name: "Vehicle 1", status: "Active" },
    { id: 2, name: "Vehicle 2", status: "Offline" },
    { id: 3, name: "Vehicle 3", status: "Critical" },
    { id: 4, name: "Vehicle 4", status: "Active" },
    { id: 5, name: "Vehicle 5", status: "Active" },
    { id: 6, name: "Vehicle 6", status: "Active" },
    { id: 7, name: "Vehicle 7", status: "Offline" },
    { id: 8, name: "Vehicle 8", status: "Offline" },
    { id: 9, name: "Vehicle 9", status: "Active" },
    { id: 10, name: "Vehicle 10", status: "Active" },
    { id: 11, name: "Vehicle 10", status: "Critical" },
    { id: 12, name: "Vehicle 10", status: "Active" },
    // Add more vehicles as needed
  ];



  return (
    <>
      <Dashboard />
      <Flex marginLeft="250px" marginTop="20px" fontFamily="Arial">
        {/* First card */}
        <Card width="350px" boxShadow="sm" border="0.5px solid gray" mb="10px">
          <CardHeader>
            <Heading size="sm">Vehicle Status</Heading>
          </CardHeader>
          <CardBody p="0">
            <Chart
              options={vehicleStatusOptions}
              series={vehicleStatusData.series}
              type="pie"
              width="100%"
            />
          </CardBody>
          <CardFooter>
            <Text fontSize="sm">Total Vehicles: 100</Text>
          </CardFooter>
        </Card>
        {/* Additional Flex Cards */}
        <Card
          width="300px"
          height="120px"
          boxShadow="sm"
          border="0.5px solid gray"
          mb="10px"
          ml="10px"
        >
          <CardBody p="4">
            <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>Your Fleet</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>254</p>
                <p style={{ color: "gray" }}>Vehicles</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>230</p>
                <p style={{ color: "gray" }}>Drivers</p>
              </div>
            </div>
          </CardBody>


          {/* Third Card */}
          <Card
            position="absolute"
            width="520px"
            display="flex"
            // height="250px"
            boxShadow="sm"
            border="0.5px solid gray"
            mt={"130px"}

          >
            <Flex justifyContent="space-between" mb="2" p="2">
              <Text fontWeight="bold">Revenue</Text>
              <Flex border="1px solid gray" borderRadius="5px">
                <Text
                  cursor="pointer"
                  p="1"
                  borderRight="1px solid gray"
                  _hover={{ textDecoration: "underline" }}
                  mr="2"
                  onClick={() => handleTabChange("day")} // Add the appropriate function
                >
                  Day
                </Text>

                <Text
                  cursor="pointer"
                  p="1"
                  borderRight="1px solid gray"
                  _hover={{ textDecoration: "underline" }}
                  mr="2"
                  onClick={() => handleTabChange("month")} // Add the appropriate function
                >
                  Month
                </Text>
                <Text
                  cursor="pointer"
                  p="1"
                  _hover={{ textDecoration: "underline" }}
                  onClick={() => handleTabChange("year")} // Add the appropriate function
                >
                  Year
                </Text>
              </Flex>
            </Flex>
            <Chart options={revenueOptions} series={revenueData.series} type="bar" height={200} width={500} />
          </Card>

        </Card>


        <Card
          width="300px"
          height="120px"
          boxShadow="sm"
          border="0.5px solid gray"
          mb="10px"
          ml="10px"
        >
          <CardBody p="4">
            <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>
              Vehicle Assignment
            </h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>230</p>
                <p style={{ color: "gray" }}>Assigned</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>24</p>
                <p style={{ color: "gray" }}>Unassigned</p>
              </div>
            </div>
          </CardBody>
        </Card>


        <Card
          width="300px"
          height="120px"
          boxShadow="sm"
          border="0.5px solid gray"
          mb="10px"
          ml="10px"
        >
          <CardBody p="4">
            <h1 style={{ fontWeight: "bold", marginBottom: "10px" }}>Issues</h1>
            <div style={{ display: "flex", flexDirection: "row", gap: "50px" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>23</p>
                <p style={{ color: "gray" }}>Due Soon</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: "28px" }}>04</p>
                <p style={{ color: "gray" }}>Overdue</p>
              </div>
            </div>
          </CardBody>

          {/* Vehicle List Card */}
          <Card
            position="absolute"
            display="flex"
            width="250px"
            height="570px"
            boxShadow="sm"
            border="0.5px solid gray"
            mt="130px"
            mb="10px"
          >
            <CardHeader>
              <Flex alignItems="center">
                <Heading size="sm">Vehicle List</Heading>
                <Box mt="2" ml="auto">
                  <Icon as={FiSearch} cursor="pointer" onClick={toggleSearchBox} />
                </Box>
              </Flex>
              {showSearchBox && (
                <InputGroup mt="2">
                  <Input
                    placeholder="Search..."
                    size="sm"
                    borderRadius="0"
                    borderColor="gray.200"
                  />
                  <InputRightElement>
                    <Icon as={FiSearch} color="gray.500" />
                  </InputRightElement>
                </InputGroup>
              )}
            </CardHeader>
            <Divider />
            <CardBody p="2" overflowY="auto">
              {/* List of vehicles */}
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {vehicleListData.map((vehicle) => (
                  <Flex
                    key={vehicle.id}
                    boxShadow="sm"
                    p="1"
                    borderRadius="5px"
                    border="1px solid gray"
                    alignItems="center"
                    justifyContent="space-between"
                    mb="2"
                  >
                    {/* Left side (image, name, status) */}
                    <img
                      src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt={vehicle.name}
                      style={{ width: "30px", height: "30px", marginRight: "10px" }}
                    />
                    <Flex alignItems="center" mr="10" direction="column">
                      <Text fontSize="sm">{vehicle.name}</Text>
                      <Text
                        fontSize="sm"
                        color={
                          vehicle.status === "Active"
                            ? "green"
                            : vehicle.status === "Offline"
                              ? "#7ba0c2"
                              : vehicle.status === "Critical"
                                ? "red"
                                : "black"
                        }
                      >
                        {vehicle.status}
                      </Text>
                    </Flex>
                    {/* Right side (three dots icon) */}
                    <Box>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => handleVehicleOptionsClick(vehicle.id)}
                      >
                        {/* Add your three dots icon here */}
                       <FaEllipsisV />
                      </span>
                    </Box>
                  </Flex>
                ))}
              </ul>
            </CardBody>
          </Card>

        </Card>
      </Flex>


      {/* Second card */}
      <Flex marginLeft="240px" fontFamily="Arial">
        <Card width="300px" boxShadow="sm" border="0.5px solid gray" ml="10px">
          <CardHeader>
            <Heading size="sm">Distance</Heading>
            <p>Last week distance</p>
          </CardHeader>
          <CardBody m="5px" p="0">
            <Chart
              options={distanceOptions}
              series={distanceData.series}
              type="bar"
              width="100%"
            />
          </CardBody>
          <CardFooter>
            <Text fontSize="sm">Total Distance: 100km</Text>
          </CardFooter>
        </Card>
        <Card width="520px" height="200px" boxShadow="sm" border="0.5px solid gray" mb="10px" mt="70px" ml="10px">
          {/* Content for the fifth card */}
        </Card>
      </Flex>
    </>
  );
};

export default DashboardContent;
