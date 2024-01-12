import React, { useState, useRef } from "react";
import Dashboard from "../../pages/Dashboard/Dashboard";
import {
  AspectRatio,
  Box,
  Input,
  Button,
  SkeletonText,
  Flex,
  HStack,
  ButtonGroup,
  IconButton,
  Text,
} from "@chakra-ui/react";
import {FaTimes } from "react-icons/fa";
import {
  Autocomplete,
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

 //const center = { lat: 17.52541, lng: 78.532944 };

const LiveView = () => {
  const { isLoaded } = useJsApiLoader({
    //googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
 //   googleMapsApiKey: "AIzaSyDyv74pl4Dw1WD8orh8byuNQPnRaXVp5mQ",
 googleMapsApiKey:"AIzaSyCcAbuynufCN2_c97eaLw_IlXFCHea62bw",

    libraries: ["places"],
  });
  console.log(isLoaded);

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [center, setCenter] = useState({ lat: 17.52541, lng: 78.532944 });
console.log("before:" ,center);

  const [directionsResponse, setDirectionsResponse] = useState(null);

  const originRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }
  async function findLocation() {
    // const newLocation={
    //   lat:17.366131, lng: 78.429169
    // } 
    if (originRef.current.value === "") {
      return;
    }

    setCenter(newLocation);
    console.log("After:" ,center);


    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: originRef.current.value,
    });
    console.log(results);
    setDirectionsResponse(results);
  }
  function clearRoute() {
    setDirectionsResponse(null);

    originRef.current.value = "";
  }

  const onLoad = (autocomplete) => {
    console.log("Autocomplete loaded:", autocomplete);
  };

  const onPlaceChanged = () => {
    console.log("Place changed");
  };

  return (
    <div>
      <Dashboard />
      <div style={{ marginLeft: "250px", marginTop: "20px",overflow: "hidden" }}>
        <h1>Live View-Location</h1>
        {/* <Box pos="fixed" w="50%" h="300" zIndex={2}> */}
        {/* <AspectRatio ratio={16 / 9}>
  <iframe
    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng'
  />
</AspectRatio> */}

        <Flex
          position="relative"
          flexDirection="column"
          alignItems="center"
          h="80vh"
          w="100vw"
        >
          <Box position="absolute" left={0} right={20} top={0} h="100%" w="100%">
            {/* Google Map Box */}
            <GoogleMap
              center={center}
              zoom={15}
              mapContainerStyle={{ width: "100%", height: "100%" }}
              options={{
                zoomControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
              }}
              onLoad={(map) => setMap(map)}
            >
              <Marker position={center} />
              {directionsResponse && (
                <DirectionsRenderer directions={directionsResponse} />
              )}
            </GoogleMap>
          </Box>
          <Box
            p={4}
            borderRadius="lg"
            m={4}
            bgColor="white"
            shadow="base"
            minW="container.md"
            zIndex="1"
          >
            <HStack spacing={2} justifyContent="space-between">
              <Box flexGrow={1}>
                <Autocomplete>
                  <Input type="text" placeholder="Origin" ref={originRef} />
                </Autocomplete>
              </Box>

              <ButtonGroup>
                <Button colorScheme="pink" type="submit" onClick={findLocation}>
                  Find Location
                </Button>
                <IconButton
                  aria-label="center back"
                  icon={<FaTimes />}
                  onClick={clearRoute}
                />
              </ButtonGroup>
            </HStack>
          </Box>
        </Flex>

        {/* <Box style={{ float: "right", marginRight: "140px" }}>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Input type="text" placeholder="search place" w="55%" />
          </Autocomplete>

          <Button colorScheme="blue">Search</Button>
        </Box> */}
      </div>
    </div>
  );
};

export default LiveView;
