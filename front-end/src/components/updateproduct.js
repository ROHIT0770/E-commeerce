import React, { useEffect } from "react";
 import {useParams,useNavigate} from 'react-router-dom';

const Updateproduct=()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCategory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        // console.warn(params)
        getproductsdetails();
    }, [])
    const getproductsdetails=async ()=>{
        console.warn(params);
        let result=await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
    }
    const updateproduct=async ()=>{
        console.warn(name , price,category ,company )
        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
        method:'Put',
        body:JSON.stringify({name , price,category ,company}),
        headers:{
            'Content-Type':"application/json"
        }
    });
    result=await result.json();
    console.warn(result);
    navigate('/');
}
    return (

        <div className="product">
            <h1>Update product</h1>
            <input text="text" placeholder='Enter product name' className="inputBox"
                value={name} onChange={(e)=>{setName(e.target.value)}} 
            />
            <input text="text" placeholder='Enter product price' className="inputBox"
                value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />

            <input text="text" placeholder='Enter product category' className="inputBox"
            value={category} onChange={(e)=>{setCategory(e.target.value)}}
            />
            <input text="text" placeholder='Enter product company' className="inputBox"
            value={company} onChange={(e)=>{setCompany(e.target.value)}}
            />
            <button onClick={updateproduct} className="appButton">Update product</button>
        </div>
    )
}

export default Updateproduct;