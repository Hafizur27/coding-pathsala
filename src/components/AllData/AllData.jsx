import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';

const AllData = () => {
    const [allData, setAllData] = useState([])
    useEffect(() =>{
        fetch('allData.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    return (
        <div className='w-5/6 mx-auto pt-6 md:flex'>
           <div className='md:flex-initial md:w-3/5'>
            {
                allData.map(data => <Data data={data} key={data.id}></Data>)
            }
           </div>
           <div className='md:flex-initial md:w-1/3'>
            <h1>left side</h1>
           </div>
        </div>
    );
};

export default AllData;