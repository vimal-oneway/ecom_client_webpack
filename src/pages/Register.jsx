import React,{useState} from 'react'
import { OutlinedInput,Chip,Grid,Divider, Button,FormControlLabel,Checkbox, Box,TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {useForm} from 'react-hook-form'

import Axios from "../config/axios"


export default function Register () {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleOnSubmit = (data) => {
        console.log(data);
        Axios.registerUser(data)
        navigate("/register/verify")
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  return (
    <div className='mt login-con'>
            <Box component="form" onSubmit={handleSubmit(handleOnSubmit)} noValidate  className='form-con'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl  fullWidth variant="outlined">
                                <TextField id="outlined-basic" label="Username" helperText={""} type={"text"} variant="outlined" {...register("username",{ 
                                        required: true,  
                                    })} 
                                />
                                {errors.username && <p>Please fill username</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="Email" helperText={""} type={"email"} variant="outlined" {...register("email",{ 
                                    required: true,  
                                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                                })} 
                            />
                                {errors.email && <p>Please check the email</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4}>
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
                    </Grid>
                    <Grid item xs={12} sm={6}  md={4}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="Street" helperText={""} type={"text"} variant="outlined" {...register("street",{ 
                                    required: true,  
                                })} 
                            />
                            {errors.street && <p>Please fill street</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="Area" helperText={""} type={"text"} variant="outlined" {...register("area",{ 
                                    required: true,  
                                })} 
                            />
                            {errors.area && <p>Please fill area</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="City" helperText={""} type={"text"} variant="outlined" {...register("city",{ 
                                    required: true,  
                                })} 
                            />
                            {errors.city && <p>Please fill city</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="State" helperText={""} type={"text"} variant="outlined" {...register("state",{ 
                                    required: true,  
                                })} 
                            />
                            {errors.state && <p>Please fill state</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <FormControl  fullWidth variant="outlined">
                            <TextField id="outlined-basic" label="zip" helperText={""} type={"number"} variant="outlined" {...register("zip",{ 
                                    required: true,  
                                })} 
                            />
                            {errors.zip && <p>Please fill zip</p>}
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={8}>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="accept terms&conditiions" name='conditions'  />
                    </Grid>
                </Grid>
                <div className='mb'></div>
                <Button variant="contained" type='submit'onClick={handleSubmit(handleOnSubmit)} >register</Button>
                <div className='mt'>
                <Divider> <Chip label="OR" /></Divider>
                </div>
                <Button variant="contained" onClick={()=>{navigate("/login")}} > login</Button>
            </Box>
        </div>
  )
}
