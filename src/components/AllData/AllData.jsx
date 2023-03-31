import React, { useEffect, useState } from 'react';

const AllData = () => {
    const [allData, setAllData] = useState([])
    useEffect(() =>{
        fetch('allData.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    
    return (
        <div className='w-5/6 mx-auto pt-6'>
            <h1>here is our all data</h1>
        </div>
    );
};

export default AllData;