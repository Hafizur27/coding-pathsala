import React from 'react';

const Question = () => {
    return (
        <div className='w-5/6 mx-auto pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 '>
            <div className='bg-base-100 shadow-xl rounded p-4'>
                <h1 className='text-center p-4 font-bold text-primary '>Difference between props and state.</h1>
                <p><span className='font-extrabold'>Props : </span> Props are immutable and read only data. Props allow to pass data from one component to another components as an arguments. props can be accessed by the child components. Props are used to communicate between components. Stateless components can have props. Props make component reusable. <br /><br /><span className='font-extrabold'>State : </span>State is mutable and state changes can be asynchronous. State holds information about the components. States can not be accessed by the child components. Stateless components can not have state. State can not make components reusable.</p>
            </div>
            <div className='bg-base-100 shadow-xl rounded p-4'>
                <h1 className='text-center p-4 font-bold text-primary'>How does useState work?</h1>
                <p><span className='font-extrabold'>useState : </span>useState is react hook that allow to add state to a functional component . it returns an array with two value, the current state and function to update it . The hook takes an initial state value as an arguments and returns an updated state value whenever the setter function is called. <br /> <span className='font-extrabold'>Example :</span><br /><span className='font-semibold text-stone-500'>const [blogs, setBlogs] = useState(initial value);</span> <br />here useState contain an initial value. Blogs is the current state value that can be use declared component . The setBlogs function can be used to update the blogs and triggering a re-render of declared component.</p>
            </div>
            <div className='bg-base-100 shadow-xl rounded p-4'>
                <h1 className='text-center p-4 font-bold text-primary'>Purpose of useEffect other than fetching data.</h1>
                <p><span className='font-extrabold'>useEffect :</span>useEffect hook in react is primarily used for performing side effects such as fetching data from an API, updating the DOM , and subscribing to events. useEffect can be used for other purpose such as:- <br />1. Running on state change: validating input field. <br />2. Running on state change: live filtering. <br />3. Running on state change: trigger animation on new array value. <br />4. Running on props change: update paragraph list on fetched API data update. <br />5. Running on props change: updating fetched API data to get BTC updated price.</p>
            </div>
            <div className='bg-base-100 shadow-xl rounded p-4'>
                <h1 className='text-center p-4 font-bold text-primary'>How does react work?</h1>
                <p><span className='font-extrabold'>React : </span>React maintains a tree and it will do efficient diff computations on the nodes. React uses a virtual DOM to manage the state and rendering of components. The virtual DOM is a lightweight representation of the actual DOM. When a user interacts with a React component, the component's state is updated. This triggers a re-rendering of the component. React compares the new virtual DOM representation with the previous one to determine what has changed. Based on the changes, React updates only the necessary parts of the actual DOM. This is known as reconciliation. The updated component is then displayed to the user.</p>
            </div>
        </div>
    );
};

export default Question;