import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCards from './TabCards';

const ReactTab = () => {

    // police data
    const [alltoypolice,setAlltoypolice]=useState([])

    useEffect(()=>{
        fetch('https://cartoy-server.vercel.app/allToys')
        .then(res=>res.json())
        .then(data=>setAlltoypolice(data))
    },[])

    // Sports data

    
    const [alltoysports,setAlltoysports]=useState([])

    useEffect(()=>{
        fetch('https://cartoy-server.vercel.app/sportstoy')
        .then(res=>res.json())
        .then(data=>setAlltoysports(data))
    },[])

    // fire data

    const [alltoyfire,setAlltoyfire]=useState([])

    useEffect(()=>{
        fetch('https://cartoy-server.vercel.app/fire')
        .then(res=>res.json())
        .then(data=>setAlltoyfire(data))
    },[])


    // ambulance

    const [alltoyambulance,setAlltoyambulance]=useState([])

    useEffect(()=>{
        fetch('https://cartoy-server.vercel.app/ambulance')
        .then(res=>res.json())
        .then(data=>setAlltoyambulance(data))
    },[])

    




    return (
        <div className=' mt-10'>
               <h1 className="text-5xl font-bold text-center my-5">Category</h1>
             <Tabs>
    <TabList>
      <Tab>Police</Tab>
      <Tab disabled>Luigi</Tab>
      <Tab>Sports</Tab>
      <Tab>Fire</Tab>
      <Tab>Ambulance</Tab>
    </TabList>

    <TabPanel>
   <div className='grid lg:grid-cols-3 gap-7 my-10'>
    {
alltoypolice.slice(0,3).map(item=><TabCards key={item._id} item={item}/>)
    }
   </div>
   <button>Show all</button>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-10'>
    {
alltoysports.slice(0,3).map(item=><TabCards key={item._id} item={item}/>)
    }
   </div>
   <button>Show all</button>
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-10'>
    {
alltoysports.slice(0,3).map(item=><TabCards key={item._id} item={item}/>)
    }
   </div>
   <button>Show all</button>
    
    </TabPanel>
    <TabPanel>
    <div className='grid lg:grid-cols-3 gap-7 my-10'>
    {
alltoyfire.slice(0,3).map(item=><TabCards key={item._id} item={item}/>)
    }
   </div>
   <button>Show all</button>
    
    </TabPanel>
    <TabPanel>

    <div className='grid lg:grid-cols-3 gap-7 my-10'>
    {
alltoyambulance.slice(0,3).map(item=><TabCards key={item._id} item={item}/>)
    }
   </div>
   <button>Show all</button>
 
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReactTab;