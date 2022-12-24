import axios from "axios";
export default class sendUser 
{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
        this.options={
            mode:'no-cors',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                
            }
        }
    }
    

    static async loginUser(info){
        console.log('hi form loginUser',info);
        await axios.post('http://localhost:9000/user/login',info
        ,this.options)
        .then((res)=>{
            console.log(res);
        })
        .catch((e)=>{console.log(e);})

    }

    static async registerUser(info){
        console.log('hi form loginUser',info);
        await axios.post('http://localhost:9000/user/register',info
        ,this.options)
        .then((res)=>{
            console.log(res);
        })
        .catch((e)=>{console.log(e);})
    }

    static async getAllProductData(){
        const productData =  await axios.get('http://localhost:9000/product/all'
        ,this.options)
        .then((res)=>{
            return res.data
        })
        .catch((e)=>{
            console.log(e);
        })
        return productData
    }

    static async getProductDataById(loc){
        const productData =  await axios.get(`http://localhost:9000${loc}`
        ,this.options)
        .then((res)=>{
            // console.log(res.data);
            return res.data
        })
        .catch((e)=>{
            console.log(e);
        })
        return productData
    }


    static async getProductData(category){
        // console.log(category);
        const productData = await axios.get(`http://localhost:9000${category}`,this.options)
        .then((res)=>{
            // console.log(res.data);
            return res.data
        })
        .catch((e)=>{console.log(e);})
        return productData?productData:{msg:"no data"}
    }

    static async productRegister(info){
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        console.log("hi",info);
        // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
        const userData = await axios.post('http://localhost:9000/product/add',info, config)
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((e)=>{
            console.log(e);
        })
        return userData
    }

    static async setCartQuantity(isAdd, userId, productId)
    {
        console.log("hi");
        const data = await axios.post("http://localhost:9000/user/setCartQuantity", {userId:userId, productId:productId,isAdd:isAdd})
        .then((res)=>{
            console.log(res.data);
            console.log("hello");
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        return data
    }

    static async addToCart(userId, productId)
    {
        console.log("hi");
        const addCart = await axios.post("http://localhost:9000/user/cart", {userId:userId, productId:productId})
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        return addCart
    }

    static async delCart (userId, productId)
    {
        console.log("hi");
        console.log(userId, productId);
        const data =await  axios.post("http://localhost:9000/user/delCart", {userId:userId, productId:productId})
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        return data
    }

    static async getCart(userId)
    {
        const cartData = await axios.post("http://localhost:9000/user/getCart", {userId:userId, userData:userId})
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>{
            console.log(err);

        })
        return cartData;
    }

    static async setVerify(otp, email)
    {
        const data = await axios.post("http://localhost:9000/user/verify", {otp:otp,email:email})
        .then((res)=>{
            return res.data;
        })
        .catch((err)=>{
            console.log(err);

        })
        return data
    }

    static async setLogOut()
    {
        await axios.post("http://localhost:9000/user/logout", {})
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    static async forgotPassword(email)
    {
        const data = await axios.post("http://localhost:9000/user/forgotPassword/sendOtp", {email:email}, this.options)
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        return data
    }

    static async setPassword(url, password)
    {
        const data = await axios.post(`http://localhost:9000/${url}`, {password:password}, this.options)
        .then((res)=>{
            console.log(res.data);
            return res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        return data
    }
}