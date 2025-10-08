import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <div>
                <h2>Type 1: Simple Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your Name' />
                <br />
                <br />
                <input type="email" name="email" placeholder='Your Email' id="" />
                <br />
                <br />
                <input type="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;