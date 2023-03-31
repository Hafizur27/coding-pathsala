import React from 'react';

const Data = (props) => {
    const {name, title, cover, profile, read_time, published_date} = props.data;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl mb-6">
                <figure><img src={cover} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex justify-between align-middle'>
                    <div className='flex gap-5'>
                        <img className='h-14 w-14 rounded-full' src={profile} alt="" />
                        <div>
                            <h4 className='font-bold'>{name}</h4>
                            <p className='font-medium'>March {published_date}</p>
                        </div>
                    </div>
                    <div>
                        <p>{read_time} min read</p>
                    </div>
                    </div>
                    <div>
                    <h2 className="card-title font-extrabold">{title}</h2>
                    <button className='btn  btn-link text-primary p-0'>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Data;