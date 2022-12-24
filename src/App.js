import './App.css';
import Axios from 'axios';
import React,{useState,useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from "./pages/Products"
import Login from "./pages/Login";
import Register from "./pages/Register"
import Verify from './pages/Verify'
import Logout from './components/Logout'
import Cart from './pages/Cart'
import  ProductAdd  from './pages/ProductAdd';
import  Product  from './pages/Product';

const theme = createTheme({
  palette: {
    primary: {
      main:'#1876d2'
    },
    secondary: {
      main: '#457B9D',
    },
  },
});

function App() {
  const initialUserData = {
    email:'',
    userId:null,
    cart:[],
    userName:'',
    street:'',
    area:'',
    city:'',
    state:'',
    zip:null
  }

  const options={
    mode:'no-cors',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  }


  const [userData,setUserData] = useState(initialUserData);
  Axios.defaults.withCredentials=true;

  const getUser = async () => {
    await Axios.get('http://localhost:9000/user/getUser'
    ,options)
    .then((res)=>{
      if(res.data.isLoggedIn)
      {
        var data = res.data.user
        const {username,email,userId,cart,street,area,city,state,zip} = data;
        setUserData({email:email,userName:username, userId: userId, cart:cart, street:street, area:area, city:city, state: state, zip:zip})
      }
    })
  }


  
  useEffect(()=>{
    getUser()
  },[])

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Navbar userData={userData}/>
          <Routes>
            <Route index element={<Home userData={userData}/>}/>
            <Route path='/products' element={<Products userData={userData}/>}/>
            <Route path='/projects' element={<Products userData={userData}/>}/>
            <Route path='/contact' element={<Products userData={userData}/>}/>
            <Route path='/login' element={<Login userData={userData}/>}/>
            <Route path='/register' element={<Register userData={userData}/>}/>
            <Route path='/register/verify' element={<Verify userData={userData}/>}/>
            <Route path='/logout' element={<Logout userData={userData}/>}/>
            <Route path='/cart' element={<Cart userData={userData}/>}/>
            <Route path='/product/add' element={<ProductAdd userData={userData}/>}/>
            <Route path='/products/:id' element={<Product userData={userData}/>}/>
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
  
}

export default App;
