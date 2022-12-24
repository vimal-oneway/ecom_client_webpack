import React,{useState, useEffect} from 'react';
import ProductCard from "../components/ProductCard"
import Axios from '../config/axios'
import { Container } from '@mui/system';
export default function Products ({userData}) {
  const [products, setProducts] = useState();

  const getProductsData = async() =>{
    setProducts(JSON.parse(JSON.stringify(await Axios.getAllProductData())))
  }

  useEffect(()=>{
    getProductsData()
  })

  return (
   <div className='mt'>
      <Container>
        <ProductCard products={products} userData={userData}/>
      </Container>
    </div>
  );
}