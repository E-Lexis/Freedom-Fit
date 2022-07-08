import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

    return(
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Sign Up</div>
                            <div class="card-body">
                                <form onSubmit={handleFormSubmit} class="login-form">
                                    <div class="form-group row">
                                        <label for="first-name-signup" class="col-md-4 col-form-label text-md-right">First Name:</label>
                                            <div class="col-md-6">
                                                <input type="text" id="first-name-signup" class="form-control"/>
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="last-name-signup" class="col-md-4 col-form-label text-md-right">Last Name:</label>
                                            <div class="col-md-6">
                                                <input type="text" id="last-name-signup" class="form-control"/>
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="email-signup" class="col-md-4 col-form-label text-md-right">Email:</label>
                                            <div class="col-md-6">
                                                <input type="text" id="email-signup" class="form-control"/>
                                            </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="password-signup" class="col-md-4 col-form-label text-md-right">Password:</label>
                                            <div class="col-md-6">
                                                <input type="password" id="signup" class="form-control"/>
                                            </div>
                                    </div>
                                    <div class="col-md-6 offset-md-4">
                                        <button type="submit">Sign Up</button>
                                    </div>
                                        <Link to="/login">← Go to Login</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
}

export default Signup;