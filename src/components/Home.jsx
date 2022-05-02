import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import  './home.css'
export const Home = () => {
 
  const contacts=useSelector(store=>store);
   const dispatch=useDispatch();
  const deleteContact=(id)=>{
    dispatch({type:"DELETE_CONTACT",payload:id});
    toast.success("Contact deleted successfully");
  }

  return (
    <div className='main'>
      <div>
        <div>
          <button><Link to='/add'>Add Contact</Link></button>
        </div>
        <div>
          <h1>Welcome to react redux Book</h1>
          <table>
            <thead id='customers'>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                contacts.map((contact,id)=>(
                  <tr key={id}>
                    <td>{id+1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td><Link to={`/edit/${contact.id}`}>Edit</Link></td>
                    <button onClick={()=>deleteContact(contact.id)}>Delete</button>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
