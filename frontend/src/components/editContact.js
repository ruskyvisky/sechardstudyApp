import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function EditContact(props) {
const initialState = {
  name: "",
  address: "",
  phone: "",
  mobile_phone: "",
  email: "",
}
  const [data,setData] = useState(initialState)
  const {name,address,phone,mobile_phone,email} = data;
const {id} = useParams()


  const getSingleContact =  async (id) =>{
    const res = await axios.get(`http://localhost:5000/api/${id}`)
    
    if(res.status===200){
   console.log(res.data)
      setData(res.data)
     
    }
   
  }
  useEffect(()=>{
    if(id){
    
      getSingleContact(id)
    }
  },[id])
const uptadeContact = async (data,id) =>{
  const res = await axios.put(`http://localhost:5000/api/${id}`,data)
  if(res.status===200){
    console.log(res.data)
    console.log("veri uptadelandı")
  }
}
  
const handleFormSubmit = (e) => {
  e.preventDefault();
  uptadeContact()
}
const handleInputChange = (e) =>{
  const {name,value} = e.target
  setData({...data,[name] : value})
}
    
    return (
      <div>
       <div className="container">
            <form className="mt-5" onSubmit={handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="EDİT CONTACT" disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="name">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                />
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="address">Address</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="address"
                                value={address}
                                 onChange={handleInputChange}
                                />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="phone">Phone</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="phone"
                                value={phone}
                                 onChange={handleInputChange}
                                />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="mobilephone">Mobile Phone</label>
                        <input 
                                type="tel" 
                                className="form-control" 
                                name="mobilephone"
                                value={mobile_phone}
                                onChange={handleInputChange}
                                />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="email">Email</label>
                        <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                                />
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block my-3" value="Edit Contact" />
            </form>
        </div>
      </div>
    )
  
}
