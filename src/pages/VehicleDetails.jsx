// import React, { useState } from 'react';


// import {
//   Button,
//   Flex,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   Spacer,
//   Table,
//   TableContainer,
//   Tbody,
//   Td,
//   Text,
//   Tfoot,
//   Th,
//   Thead,
//   Tr,
// } from '@chakra-ui/react';
// import Dashboard from './Dashboard/Dashboard';

// const vehicleDetails = () => {
//   const [selectedFilter, setSelectedFilter] = useState(null);

//   const handleFilterChange = (filter) => {
//     console.log("Filtering by: " + filter);
//     setSelectedFilter(null);
//   };

//   return (
//     <>
    
//     <Flex direction="column" p={4}>
//       <Flex>
//         <Spacer />
//         <Menu>
//           <MenuButton as={Button}>
//             {selectedFilter ? `Selected: ${selectedFilter}` : 'Select Time Range' }
//           </MenuButton>
//           <MenuList>
//             <MenuItem onClick={() => handleFilterChange('Week')}>This Week</MenuItem>
//             <MenuItem onClick={() => handleFilterChange('Month')}>This Month</MenuItem>
//             <MenuItem onClick={() => handleFilterChange('Year')}>This Year</MenuItem>
//           </MenuList>
//         </Menu>
//       </Flex>

//       <TableContainer>
//         <Text fontFamily="Arial">Vehicle List</Text>
//         {selectedFilter === "Week" && (
//           <Table variant='simple'>
//             <Thead>
//               <Tr>
//                 <Th>No</Th>
//                 <Th textTransform="capitalize">Driver Name</Th>
//                 <Th textTransform="capitalize">Vehicle Type</Th>
//                 <Th textTransform="capitalize">Vehicle Number</Th>
//                 <Th textTransform="capitalize">Status</Th>
//               </Tr>
//             </Thead>
//             <Tbody>
//             <Tr>
//               <Td>1</Td>
//               <Td>A B C</Td>
//               <Td>Eicher E2</Td>
//               <Td>MH23BH2024</Td>
//               <Td color="green.500">Ongoing</Td>
//             </Tr>
//             <Tr>
//               <Td>2</Td>
//               <Td>D E F</Td>
//               <Td>Tesla Model S</Td>
//               <Td>MH24BH2024	</Td>
//               <Td color="blue.500">Finished</Td>
//             </Tr>
//             <Tr>
//               <Td>3</Td>
//               <Td>G H I</Td>
//               <Td>Toyota Corolla</Td>
//               <Td>MH25BH2024	</Td>
//               <Td color="red.500">Canceled</Td>
//             </Tr>
//             <Tr>
//               <Td>4</Td>
//               <Td>J K L</Td>
//               <Td>Honda Accord</Td>
//               <Td>MH26BH2024	</Td>
//               <Td color="green.500">Ongoing</Td>
//             </Tr>
//             <Tr>
//               <Td>5</Td>
//               <Td>M N O</Td>
//               <Td>Ford Mustang</Td>
//               <Td>MH27BH2024	</Td>
//               <Td color="blue.500">Finished</Td>
//             </Tr>
//           </Tbody>
//             <Tfoot>
//             </Tfoot>
//           </Table>
//         )}
//         {selectedFilter === "Month" && (
//           <Table variant='simple'>
//             {/* Table data for the month */}
//           </Table>
//         )}
//         {selectedFilter === "Year" && (
//           <Table variant='simple'>
//             {/* Table data for the year */}
//           </Table>
//         )}
//       </TableContainer>
//     </Flex>
//     </>
//   );
// };

// export default VehicleDetails;