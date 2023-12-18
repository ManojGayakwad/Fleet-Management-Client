import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Select, 
  Checkbox, CheckboxGroup, Stack, Textarea, Button

} from '@chakra-ui/react'
import { Form } from "react-router-dom";



const AddDriver = () => {
  return (
    <>
    <Dashboard />
      <div style={{marginLeft:"260px", marginTop:"20px",  width:"80%"}}>

        <h2 style={{fontSize:'26px', fontWeight:'bold', margin:'20px 0px'}}>Add Driver</h2>

            <label htmlFor="">Position/Lane Applying For</label>
            <Input style={{width:"300px",marginLeft:'10px'}}></Input>

        
        <div style={{ marginTop:'30px'}}>
        <h3 style={{fontSize:'20px', fontWeight:'bold', margin:'0px 0px'}}>Genral Information</h3>
          <form action="">
            <div style={{margin:'20px 0px'}}>
              <label htmlFor="">Full Name:</label>
              <Input placeholder="Your Name" style={{width:"300px",marginLeft:'10px'}}></Input>
            </div>
            <div>
              <label htmlFor="">Address:</label>
              <Input placeholder="Street Address" style={{width:"300px", marginLeft:'20px'}}></Input>
              
              <Input placeholder="City" style={{width:"300px", marginLeft:'10px'}}></Input>
              <Input placeholder="State / Province" style={{width:"300px", marginLeft:'10px'}}></Input>
              <Input placeholder="Zip Code" style={{width:"300px", margin:'10px', marginLeft:"83px"}}></Input>
              <Input placeholder="Country" style={{width:"300px"}}></Input>
            </div>
            <div>
            <label htmlFor="">Email:</label>
              <Input placeholder="Email Address" style={{width:"300px", marginLeft:'40px'}}></Input>
            </div>

            <div style={{marginTop:'10px'}}>
            <label style={{marginTop:'10px'}} htmlFor="">Phone</label>
              <Input placeholder="+91" style={{width:"300px", marginLeft:'40px'}}></Input>
            </div>
            <div style={{margin:'15px 0px'}}>
            <label htmlFor="">If hired, can you furnish proof you are eligible to work in the India?</label>
            <Stack spacing={[1, 5]} direction={['column', 'row']}> 
            <Checkbox size='md' colorScheme='green' defaultChecked>Yes</Checkbox>
            <Checkbox size='md' colorScheme='red' defaultChecked>No</Checkbox>
            </Stack>
            </div>
            <div style={{margin:'15px 0px'}}>
            <label htmlFor="">Are you at least 23 years of age or older?</label>
            <Stack spacing={[1, 5]} direction={['column', 'row']}> 
            <Checkbox size='md' colorScheme='green' defaultChecked>Yes</Checkbox>
            <Checkbox size='md' colorScheme='red' defaultChecked>No</Checkbox>
            </Stack>
            </div>

            
            
          </form>
        </div>


        <div style={{ marginTop:'30px'}}>
        <h3 style={{fontSize:'20px', fontWeight:'bold', margin:'0px 0px'}}>License Information</h3>
          <form action="">
            <div style={{margin:'20px 0px'}}>
              <label htmlFor="">Have you held a VALID India license for the past 36 months?</label>
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                  <Checkbox size='md' colorScheme='green'>Yes</Checkbox>
                  <Checkbox size='md' colorScheme='red' defaultChecked>No</Checkbox>

              </Stack>
            </div>
            <div>
              <label htmlFor="">License Class</label>
              <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              
            </div>
            <div style={{marginTop:"15px"}}>
            <label htmlFor="">License Number:</label>
              <Input style={{width:"300px", marginLeft:'20px'}}></Input>              
            </div>

            <div style={{margin:'15px 0px'}}>
            <label htmlFor="">State of Issue</label>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </div>

            <div style={{margin:'15px 0px'}}>
            <label htmlFor="">License expiration date</label>
            <Stack spacing={[1, 5]} direction={['column', 'row']}> 
            <Select placeholder='Month'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
    
              </Select>
              <Select placeholder='Day'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Select placeholder='Year'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Stack>
            </div>
            
            <div style={{margin:'15px 0px'}}>
            <label htmlFor="">TWIC expiration date</label>
            <Stack spacing={[1, 5]} direction={['column', 'row']}> 
            <Select placeholder='Month'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
    
              </Select>
              <Select placeholder='Day'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
              <Select placeholder='Year'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
            </Stack>
            </div>
            <div>
              <label htmlFor="">Please list any licenses held in other states for the previous 5 years, include license numbers if you can.</label>
              <Textarea></Textarea>
            </div>

            <Button style={{margin:"20px 0px", width:"200px"}}>Submit</Button>
            

            
            
          </form>
        </div>
       


        
     
      </div>
    </>
  );
};

export default AddDriver;
