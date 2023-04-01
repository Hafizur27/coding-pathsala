import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import Blogs from '../Blogs/Blogs';
import { ToastContainer, toast } from 'react-toastify';

const AllData = () => {
    const [allData, setAllData] = useState([]);
    const [addData, setAddData] = useState([]);
    const [bookMark, setBookMark] = useState([]);

    useEffect(() =>{
        fetch('allData.json')
        .then(res => res.json())
        .then(data => setAllData(data));
    },[]);
    
const handelReadBtn = (readData) =>{
    const addNewData = [...addData, readData];
    setAddData(addNewData);
};

const handelBookMarkBtn = (bookMarkData) => {
    const newBookMark = [...bookMark, bookMarkData];

    if (bookMark.includes(bookMarkData)) {
        toast('Already bookmarked this book');
    } else {
        setBookMark(newBookMark);
    }
};
    return (
        <div className='w-5/6 mx-auto pt-6 md:flex gap-12'>
           <div className='md:flex-initial md:w-3/5'>
            {
                allData.map(data => <Data data={data} key={data.id} handelReadBtn={handelReadBtn} handelBookMarkBtn ={handelBookMarkBtn}></Data>)
            }
           </div>
           <div className='md:flex-initial md:w-1/3'>
                <Blogs addData={addData} bookMark = {bookMark}></Blogs>
           </div>
        </div>
    );
};

export default AllData;

