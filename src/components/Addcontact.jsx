import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import './home.css'
export const Addcontact = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("")

   const contacts=useSelector((store)=>store)
//    console.log(contacts);
const dispatch=useDispatch();

//use history hook to push back user



   const handleSubmit=(e)=>{
       e.preventDefault();

       const checkEmail=contacts.find(contact=>contact.email===email && contact)
       const checkNumber=contacts.find(contact=>contact.number===parseInt(number))


       if(!email || !number || !name){
           return toast.warning("Please fill in all filled")
       }

       if(checkEmail){
           return toast.error("This email is already taken")
       }

       if(checkNumber){
        return toast.error("This number is already taken")
    }

    const data={
        id:contacts[contacts.length-1].id+1,
        name,
        email,
        number

    }
    dispatch({type: "ADD_CONTACT" , payload:data})
    toast.success("Added Succesfully😊!!!")
    toast.done("Done, Great job");
    console.log(data);
   }
   return (
    <div className='add'>
            <h1>Add Student</h1>
        <div>
            <div>
               <form onSubmit={handleSubmit}>
                   <div className='formgroup'>
                      <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder= 'Enter your  Name ✍' />
                   </div>
                   <div className='formgroup'>
                      <input  value={email} onChange={e=>setEmail(e.target.value)} type="number" placeholder='Enter mobile number📳' />
                   </div>
                   <div className='formgroup'>
                      <input  value={number} onChange={e=>setNumber(e.target.value)} type="email" placeholder='Enter your Email📧' />
                   </div>
                 
                   <div className='formgroup'>
                      <input type="submit" value="Add Student" />
                   </div>
               </form>
            </div>
        </div>
    </div>
  )
}
