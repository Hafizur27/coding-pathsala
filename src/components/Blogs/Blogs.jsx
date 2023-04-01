import React from 'react';

const Blogs = (props) => {
    const {addData} = props;
    let spendTime = 0;
    for(const singleAddData of addData){
        spendTime = spendTime + singleAddData.read_time
    }
    return (
        <div>
            <h3 className='text-center h-18 bg-accent w-full p-4 rounded-lg font-bold text-primary '>Spent time on read :{spendTime} min</h3>
            <h3 className='text-center w-full p-4 rounded-lg font-extrabold mb-6'>Bookmarked Blogs : </h3>

        </div>
    );
};

export default Blogs;