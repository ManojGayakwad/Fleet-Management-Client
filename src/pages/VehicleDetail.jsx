import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery
} from '@chakra-ui/react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Dashboard from './Dashboard/Dashboard';
import './YourStyles.css';


const VehicleDetail = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isMediumScreen] = useMediaQuery("(max-width: 66em)"); // Detect medium screen
    

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    setSelectedStatusFilter('All');
  };

  const handleStatusFilterChange = (status) => {
    setSelectedStatusFilter(status);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const isWithinDateRange = (date) => {
    if (!startDate || !endDate) {
      return true;
    }
    return date >= startDate && date <= endDate;
  };

  const isWithinMonth = (date, currentDate) => {
    return date.getMonth() === currentDate.getMonth() && date.getFullYear() === currentDate.getFullYear();
  };

  const isWithinThisYear = (date, currentDate) => {
    return date.getFullYear() === currentDate.getFullYear();
  };

  const vehicleData = [
    { id: 1, driverName: 'John Doe', vehicleType: 'Transporter', vehicleNumber: 'TX123', status: 'Ongoing', imagePath: '/path/to/driver11.jpg', date: new Date('2022-05-12') },
    { id: 2, driverName: 'Aryan Gupta', vehicleType: 'Heavy Truck', vehicleNumber: 'DL789', status: 'Finished', imagePath: '/path/to/driver15.jpg', date: new Date('2023-03-18') },
    { id: 3, driverName: 'Emma Johnson', vehicleType: 'Heavy Truck', vehicleNumber: 'NY456', status: 'Finished', imagePath: '/path/to/driver12.jpg', date: new Date('2023-06-18') },
    { id: 4, driverName: 'Chris Martin', vehicleType: 'Small Truck', vehicleNumber: 'CA789', status: 'Canceled', imagePath: '/path/to/driver13.jpg', date: new Date('2023-08-22') },
    { id: 5, driverName: 'Bhanu Das', vehicleType: 'Transporter', vehicleNumber: 'MH04AS1001', status: 'Ongoing', imagePath: '/path/to/driver1.jpg', date: new Date('2024-01-15') },
    { id: 6, driverName: 'Amit Patel', vehicleType: 'Heavy Truck', vehicleNumber: 'GJ03EF9101', status: 'Canceled', imagePath: '/path/to/driver3.jpg', date: new Date('2024-03-20') },
    { id: 7, driverName: 'Suhas Sharma', vehicleType: 'Small Truck', vehicleNumber: 'DL04GH1212', status: 'Ongoing', imagePath: '/path/to/driver4.jpg', date: new Date('2024-04-25') },
    { id: 8, driverName: 'Rakesh Desai', vehicleType: 'Transporter', vehicleNumber: 'KA07MN1515', status: 'Canceled', imagePath: '/path/to/driver7.jpg', date: new Date('2024-04-28') },
    { id: 9, driverName: 'Suresh Yadav', vehicleType: 'Light Truck', vehicleNumber: 'TN05IJ1313', status: 'Finished', imagePath: '/path/to/driver5.jpg', date: new Date('2024-05-05') },
    { id: 10, driverName: 'Vikas Singh', vehicleType: 'Transporter', vehicleNumber: 'TN333', status: 'Ongoing', imagePath: '/path/to/driver17.jpg', date: new Date('2024-05-15') },
    { id: 11, driverName: 'Amit Verma', vehicleType: 'Light Truck', vehicleNumber: 'AP06KL1414', status: 'Finished', imagePath: '/path/to/driver6.jpg', date: new Date('2024-06-10') },
    { id: 12, driverName: 'Sneha Reddy', vehicleType: 'Transporter', vehicleNumber: 'KA555', status: 'Canceled', imagePath: '/path/to/driver18.jpg', date: new Date('2024-06-28') },
    { id: 13, driverName: 'Shiva Agarwal', vehicleType: 'Heavy Truck', vehicleNumber: 'MH08OP1616', status: 'Finished', imagePath: '/path/to/driver8.jpg', date: new Date('2024-08-20') },
    { id: 14, driverName: 'Rajendra Kumar', vehicleType: 'Small Truck', vehicleNumber: 'UP09QR1717', status: 'Canceled', imagePath: '/path/to/driver9.jpg', date: new Date('2024-09-25') },
    { id: 15, driverName: 'Sohel Khan', vehicleType: 'Small Truck', vehicleNumber: 'CA1818', status: 'Ongoing', imagePath: '/path/to/driver10.jpg', date: new Date('2024-10-01') },
    { id: 16, driverName: 'Rajesh Kumar', vehicleType: 'Small Truck', vehicleNumber: 'KA01AB1234', status: 'Ongoing', imagePath: '/path/to/driver1.jpg', date: new Date('2025-01-09') },
    { id: 17, driverName: 'Priya Singh', vehicleType: 'Transporter', vehicleNumber: 'UP222', status: 'Ongoing', imagePath: '/path/to/driver14.jpg', date: new Date('2025-02-15') },
    { id: 18, driverName: 'Anushka Patel', vehicleType: 'Small Truck', vehicleNumber: 'MH1010', status: 'Canceled', imagePath: '/path/to/driver16.jpg', date: new Date('2025-04-22') },
  ];

  const getDataForTimeRange = () => {
    switch (selectedFilter) {
      case 'This Month':
        return vehicleData.filter((item) => isWithinMonth(item.date, new Date()));
      case 'This Year':
        return vehicleData.filter((item) => isWithinThisYear(item.date, new Date()));
      default:
        return vehicleData;
    }
  };

  const getFilteredData = () => {
    const filteredData = getDataForTimeRange().filter(
      (item) =>
        (selectedStatusFilter === 'All' || item.status === selectedStatusFilter) &&
        isWithinDateRange(item.date) &&
        (searchQuery === '' ||
          item.driverName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.vehicleNumber.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const sortedData = [...filteredData].sort((a, b) => a.date - b.date);

    return sortedData;
  };

  return (
    <>
      <Dashboard/>
      <Box position="relative" ml={isMediumScreen ?"0px":"260px"}  marginTop="20px" width={isMediumScreen ?"100":"100"} overflow="auto">
        <Flex direction="column" p={4}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
            <Box p={4}>
            <Flex direction="row" justify={{ base: 'center', md: 'flex-start' }}  p={4}>
              <Heading  fontFamily="Arial" fontSize="2xl">
                Vehicle List
              </Heading>
              </Flex>
            </Box>
            <Flex direction={{ base: 'column', md: 'row' }}  justify="space-around"  p={4}  >
            
              <Input 
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                mr="150"
                mb="5px"
                width="200px"
                variant="filled"
                size="sm"
              />

            
              <DatePicker  justify="space-between"  p={4}
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                isClearable
                placeholderText="Select Date Range"
                className="date-picker"
                variant="filled" 
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
                aria-label="Select Date Range"
                
                
                  />
                
              

             
              <Menu mb={{ base: 4, md: 0 }} justify="space-between"  p={4}  >
                <MenuButton as={Button} variant="filled"  width="200px" height="32px" bg="gray.100" rounded="md" mr={8}  mb="5px" >
                  {selectedStatusFilter ? `Status: ${selectedStatusFilter}` : 'Select Status'}
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => handleStatusFilterChange('All')}>All</MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('Ongoing')}>Ongoing</MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('Finished')}>Finished</MenuItem>
                  <MenuItem onClick={() => handleStatusFilterChange('Canceled')}>Canceled</MenuItem>
                </MenuList>
              </Menu>

           
              <Menu mb={{ base: 4, md: 0 }}>
                <MenuButton as={Button} variant="filled" size="sm"   width="200px" height="32px" bg="gray.100" rounded="md" mr={6}  mb="5px">
                  {selectedFilter ? `Time Range: ${selectedFilter}` : 'Select Time Range'}
                </MenuButton>
                <MenuList >
                  <MenuItem onClick={() => handleFilterChange('All')}>All</MenuItem>
                  <MenuItem onClick={() => handleFilterChange('This Month')}>This Month</MenuItem>
                  <MenuItem onClick={() => handleFilterChange('This Year')}>This Year</MenuItem>
                </MenuList>
              </Menu>
            </Flex>

        
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>No</Th>
                    <Th textTransform="capitalize">Driver Name</Th>
                    <Th textTransform="capitalize">Vehicle Type</Th>
                    <Th textTransform="capitalize">Vehicle Number</Th>
                    <Th textTransform="capitalize">Date</Th>
                    <Th textTransform="capitalize">Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {getFilteredData().map((item, index) => (
                    <Tr key={index}>
                      <Td>{item.id}</Td>
                      <Td>
                        <Flex align="center">
                          <Avatar size="sm" name={item.driverName} src={item.imagePath} mr="2" />
                          {item.driverName}
                        </Flex>
                      </Td>
                      <Td>{item.vehicleType}</Td>
                      <Td>{item.vehicleNumber}</Td>
                      <Td>{item.date.toLocaleDateString()}</Td>
                      <Td
                        color={
                          item.status === 'Ongoing'
                            ? 'green.500'
                            : item.status === 'Finished'
                            ? 'blue.500'
                            : 'red.500'
                        }
                      >
                        {item.status}
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default VehicleDetail;
