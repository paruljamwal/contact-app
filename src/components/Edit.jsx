import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link , useParams} from 'react-router-dom'

export const Edit = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("")
    
    const {id}=useParams();

    const contacts=useSelector(store=>store);

    const currentcontact=contacts.find(contact=>contact.id===parseInt(id))
 
    useEffect(()=>{
    if(currentcontact){
        setName(currentcontact.name);
        setEmail(currentcontact.email);
        setNumber(currentcontact.number);

    }
    },[currentcontact]);
 
    const dispatch=useDispatch();

    //use history hook to push back user
    
    
    
       const handlesubmit=(e)=>{
           e.preventDefault();
    
           const checkEmail=contacts.find(contact=>contact.id !== parseInt(id) && contact.email===email)
           const checkNumber=contacts.find(contact=>contact.id !== parseInt(id)  &&contact.number===parseInt(number))
    
    
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
            id:parseInt(id),
            name,
            email,
            number
    
        }
        dispatch({type: "UPDATE_CONTACT" , payload:data})
        toast.success("Updated Succesfully😊!!!")
        toast.done("Done, Great job");
        console.log(data);
       }
 
 
    return (
    <div>
        {currentcontact ? (
            <>

    <h1>Edit Student {id}</h1>
<div>
    <div>
       <form onSubmit={handlesubmit}>
           <div className='formgroup'>
              <input  value={name} onChange={e=>setName(e.target.value)} type="text" placeholder='Name' />
           </div>
           <div className='formgroup'>
              <input  value={email} onChange={e=>setNumber(e.target.value)} type="email" placeholder='Email' />
           </div>
           <div className='formgroup'>
              <input  value={number} onChange={e=>setNumber(e.target.value)} type="Mobile" placeholder='Mobile Number' />
           </div>
           <div className='formgroup'>
              <input type="submit" value="Update Student" />
           <button> <Link to="/" className=''>Cancel</Link></button>
           </div>
       </form>
    </div>
</div>
    
    </> 
    ) : ( <h1>StudentContact with id {id} is not exists.</h1> )}
</div>
  )
}
