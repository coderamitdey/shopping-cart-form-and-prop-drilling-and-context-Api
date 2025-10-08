import React from 'react';

const FormAction = () => {

    const handleFormAction = (formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <div>
                <h2>Type 2: Action Form</h2>
            </div>
            <form action={handleFormAction}>
                <br />
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <br />
                <input type="email" name="email" placeholder='Email' id="" required />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;