import React from 'react';


const Blogs = (props) => {
    const {addData ,bookMark} = props;
    let spendTime = 0;
    for(const singleAddData of addData){
        spendTime = spendTime + singleAddData.read_time;
    }
    
    return (
        <div className='sticky top-0'>
            <h3 className='text-center h-18 bg-accent w-full p-4 rounded-lg font-bold text-primary '>Spend time on read : {spendTime} min</h3>
            <h3 className='text-center w-full p-4 rounded-lg font-extrabold mb-6'>Bookmarked Blogs : {bookMark.length} </h3>
            {bookMark.map(book => <li className='font-semibold p-4 text-zinc-600 shadow-xl rounded my-2' key={book.id}>{book.title}</li>)}

        </div>
    );
};

export default Blogs;