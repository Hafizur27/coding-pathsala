import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

const Data = (props) => {
    const {name, title, cover, profile, read_time, published_date} = props.data;
    const handelReadBtn = props.handelReadBtn;
    const handelBookMarkBtn = props.handelBookMarkBtn;

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl mb-6 p-4">
                <figure><img src={cover} alt="" /></figure>
                <div className="card-body">
                    <div className='md:flex md:justify-between md:align-middle'>
                    <div className='md:flex md:gap-5'>
                        <img className='h-14 w-14 rounded-full' src={profile} alt="" />
                        <div>
                            <h4 className='font-bold'>{name}</h4>
                            <p className='font-medium'>Published : March {published_date}</p>
                        </div>
                    </div>
                    <div className='md:flex md:gap-3'>
                        <p>Read-Time : {read_time} min</p>
                        <a  onClick={() => handelBookMarkBtn(props.data)}><FontAwesomeIcon icon={faBookmark} /></a>

                    </div>
                    </div>
                    <div>
                        <h2 className="card-title font-extrabold my-4">{title}</h2>
                        <button onClick={()  => handelReadBtn(props.data)} className='btn  btn-link text-primary p-0'>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Data;