import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Data = (props) => {
    const {name, title, cover, profile, read_time, published_date} = props.data;
    const handelReadBtn = props.handelReadBtn;
    const handelBookMarkBtn = props.handelBookMarkBtn;
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
                    <div className='flex gap-3'>
                        <p>{read_time} min read</p>
                        <p onClick={() => handelBookMarkBtn(props.data)}><FontAwesomeIcon icon={faBookmark} /></p>

                    </div>
                    </div>
                    <div>
                    <h2 className="card-title font-extrabold">{title}</h2>
                    <button onClick={()  => handelReadBtn(props.data)} className='btn  btn-link text-primary p-0'>Mark as read</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Data;