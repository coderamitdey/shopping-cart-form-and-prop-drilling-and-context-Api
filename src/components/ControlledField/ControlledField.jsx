import React, { useState } from 'react';

const ControlledField = () => {

    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

    }

    const handlePasswordOnchange = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 4){
            setError('Password must be 4 charactars or longer');
        }
        else{
            setError('');
        }
    }
    return (
        <div>
            <div>
                <h2>Type 3: Controlled Form</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <br />
                <input type="text" name='name' placeholder='Name' required/>
                <br />
                <br />
                <input type="password" name="" placeholder='Password' onChange={handlePasswordOnchange} defaultValue={password} required />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{color: 'red'}}>
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ControlledField;