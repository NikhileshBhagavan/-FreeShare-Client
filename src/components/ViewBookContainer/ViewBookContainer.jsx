import React,{useState} from 'react';
import { Dropdown } from 'semantic-ui-react';
import { Button, Popup } from 'semantic-ui-react'


const countryOptions = [
    { key: 'af', value: 'af',  text: 'Afghanistan' },
    { key: 'ax', value: 'ax',  text: 'Aland Islands' },
    { key: 'al', value: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz',  text: 'Algeria' },
    { key: 'as', value: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao',  text: 'Angola' },
];
function ViewBookContainer(){
    const [val,setval]=useState("AS");
    function find(event,valu){
        console.log(valu.value );
        console.log("hi");
        setval(valu.value);
    }
    return (<div className="row" style={{width:"100%",margin:"0px"}}>
      
    <div className="col-lg-4 select bg-white" style={{padding:"0px"}}>
    <div className='ui blue message' style={{borderRadius:"0px"}}>

    <div className="sel"> 
    <div className='ui blue message' style={{width:"100%"}}>
    <Popup content='Filter by Genre' trigger={ <Dropdown
    clearable={true}
    fluid
   
    search
    selection
    options={countryOptions}
    placeholder='Select Country' style={{marginTop:"30px",marginBottom:"20px"}}
  />} inverted />
   
    <Popup content ="Filter by SubTopic" trigger={<Dropdown
    clearable
    fluid
   
    search
    selection
    options={countryOptions}
    placeholder='Select Country' style={{marginBottom:"20px"}}
  />} inverted/>
  <Popup content="Filter by Rating" trigger={
    <Dropdown
    clearable
    fluid
   
    search
    selection
    options={countryOptions}
    placeholder='Select Country' style={{marginBottom:"30px"}}
  />} inverted/>
   
    </div>
  
   </div>
   
    </div></div>
    <div className="col-lg-4 hide bg-white"></div>
    <div className="col-lg-8 bg-white" style={{padding:"0px",}}><div class="ui red message" style={{padding:"20px",paddingLeft:"40px",paddingRight:"40px",borderRadius:"0px"}}>Reddfxvcfbrdfvgdfg
    vdxkf<br/>knvfk
    <div style={{backgroundColor:"green",height:"300px"}}>

    </div>
   
    </div>
    
  
    </div>
    </div>
  
    );
}
export default ViewBookContainer