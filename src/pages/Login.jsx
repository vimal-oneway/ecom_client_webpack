import React,{useState} from 'react'
import { OutlinedInput,Chip, Divider,Button,FormControlLabel,Checkbox, Box,TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

import ForgotPassword from '../components/ForgotPassword';

import Axios from "../config/axios"


export default function Login () {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleOnSubmit = async(data) => {
        await Axios.loginUser(data)
        navigate("/ ")
        window.location.reload()
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    return (
        <div className='mt login-con'>
            <Box component="form" onSubmit={handleSubmit(handleOnSubmit)} noValidate  className='form-con'>
                <FormControl  fullWidth variant="outlined">
                    <TextField id="outlined-basic" label="Email" helperText={""} type={"email"} variant="outlined" {...register("email",{ 
                            required: true,  
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })} 
                    />
                        {errors.email && <p>Please check the email</p>}
                </FormControl>
                <div className='mb'></div>
                <FormControl  fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                        name='password'
                        {...register("password",{ 
                            required: true, 
                            minLength: 5
                        })}
                    />
                    {errors.password && <p>Please check the password</p>}
                </FormControl>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" name='rememberMe'  />
                <ForgotPassword/>
                <Button variant="contained" type='submit'>Login</Button>
                <div className='mt'>
                <Divider> <Chip label="OR" /></Divider>
                </div>
                <Button variant="contained" onClick={()=>{navigate("/register")}} >Create a new account</Button>
            </Box>
        </div>
    )
}
