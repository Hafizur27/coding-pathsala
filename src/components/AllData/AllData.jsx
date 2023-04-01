import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Blogs from '../Blogs/Blogs';

const AllData = () => {
    const [allData, setAllData] = useState([])
    const [addData, setAddData] = useState([])
    useEffect(() =>{
        fetch('allData.json')
        .then(res => res.json())
        .then(data => setAllData(data))
    },[])
    
const handelReadBtn = (data) =>{
    const addNewData = [...addData, data]
    setAddData(addNewData)
}

    return (
        <div className='w-5/6 mx-auto pt-6 md:flex gap-12'>
           <div className='md:flex-initial md:w-3/5'>
            {
                allData.map(data => <Data data={data} key={data.id} handelReadBtn={handelReadBtn}></Data>)
            }
           </div>
           <div className='md:flex-initial md:w-1/3'>
                <Blogs addData={addData}></Blogs>
           </div>
        </div>
    );
};

export default AllData;