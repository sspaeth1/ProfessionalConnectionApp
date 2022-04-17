import React, { useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setAlert} from '../../../actions/alert';
import propTypes from 'prop-types';

import axios from 'axios';

export const Register = ({setAlert}) => {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  });

  const onChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const onSubmit = async e =>{
    e.preventDefault();
    if(password != password2){
      console.log('pswrd dont match');
      setAlert('Passwords do not match', 'danger');
    }else{
      let newUser =
      {name,
        email,
      password}
      try{
        const config ={
          headers:{
            "Content-Type":'application/json'
          }
        }
        const body = JSON.stringify(newUser);
        const res = await axios.post( "../../../../../src/routes/api/users.js", body, config);
        console.log(res.data);
      }catch(err){
        console.log(err)
      }
      console.log(formData);
    }
  }

  const {name, email, password, password2} = formData;

  return(
    <React.Fragment>
    <section className="container">
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
      <form className="form" action="create-profile.html" onSubmit={ e=>onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={ e=>onChange(e)}
            required />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={ e=>onChange(e)}
             />
          <small className="form-text"
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={ e=>onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={ e=>onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Login? <Link to="/login"></Link><a href="login">Sign In</a>
      </p>
    </section>
    </React.Fragment>
    );
};

Register.propTypes = {
  setAlert:propTypes.func.isRequired
}

export default connect(null, {setAlert})(Register);