import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import { Checkbox, CheckboxGroup, Stack, Input, NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,} from '@chakra-ui/react'

const AddVehicle = () => {
  return (
    <>
    <Dashboard />
      <div style={{marginLeft:"260px", marginTop:"20px"}}>

      <h2 style={{fontSize:'26px', fontWeight:'bold', margin:'20px 0px'}}>Add Vehicle</h2>
      <form action="">
      <div style={{margin:"20px 0px"}}>
        <label htmlFor="">Check all that applies</label>
        <Stack spacing={5} direction='row'>
        <Checkbox defaultChecked>Small trucks</Checkbox>
        <Checkbox defaultChecked>Light trucks</Checkbox>
        <Checkbox defaultChecked>Medium trucks</Checkbox>
        <Checkbox defaultChecked>Heavy trucks</Checkbox>
        <Checkbox defaultChecked>Transporters</Checkbox>
        </Stack>
      </div>
      <div style={{display:'flex'}}>
        <label htmlFor="">Date</label>
        <Input style={{width:'300px', marginLeft:"20px"}}></Input>
        <label style={{marginLeft:"40px"}} htmlFor="">Seating Capicity</label>
        <NumberInput style={{width:'300px', marginLeft:"20px"}}  step={1} defaultValue={1} min={1} max={10}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
      </div>

      <div style={{margin:"20px 0px"}}>
        <label htmlFor="">Address:</label>
          <Input placeholder="Street Address" style={{width:"300px", marginLeft:'20px'}}></Input>
              
              <Input placeholder="City" style={{width:"300px", marginLeft:'10px'}}></Input>
              <Input placeholder="State / Province" style={{width:"300px", marginLeft:'10px'}}></Input>
              <Input placeholder="Zip Code" style={{width:"300px", margin:'10px', marginLeft:"83px"}}></Input>
              <Input placeholder="Country" style={{width:"300px"}}></Input>
            </div>
            <div style={{marginTop:'10px'}}>
            <label style={{marginTop:'10px'}} htmlFor="">Phone</label>
              <Input placeholder="+91" style={{width:"300px", marginLeft:'40px'}}></Input>
            </div>

        <div style={{margin:"20px 0px"}}>
          <label htmlFor="">Chassis Make</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>

          <label style={{marginLeft:"20px"}} htmlFor="">Year</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>

          <label style={{marginLeft:"20px"}} htmlFor="Mileage">Mileage</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>
        </div>

        <div style={{margin:"20px 0px"}}>
          <label  htmlFor="">Body Make</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>

          <label style={{marginLeft:"20px"}} htmlFor=""> Vehicle Identification Number (V.I.N)</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>   
        </div>

        <div style={{margin:"20px 0px"}}>
          <label htmlFor="">Tag Number</label>
          <Input style={{width:'300px', marginLeft:"20px"}}></Input>

          <label style={{marginLeft:"20px"}} htmlFor="">Expiry</label>
          <Input style={{width:'300px',marginLeft:"20px"}}></Input> 
        </div>
      </form>

      </div>
    </>
  );
};

export default AddVehicle;
