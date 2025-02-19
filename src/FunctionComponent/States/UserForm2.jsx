import { useState } from "react";


export default function UserForm2() {
      const[user , setUser]= useState({name:"",age:""});
      
      const handleange =(e)=>{
        setUser({
         ...user,
         [e.target.name]:e.target.value,
        });
      }
  return (
   <>
   <div>
   <form>
       
       <h1>User Data </h1>
       <h2>UserName</h2>
       <input type="text" name="name" value={user.name} placeholder='Enter UserName'
        onChange={handleange}/>
       
       <h2>UserAge</h2>
       <input type="text" name="age" value={user.age} placeholder='Enter UserName' 
       onChange={handleange}/>
        <p>name:{user.name} ,age:{user.name}</p>
      
       </form>
   </div>
   </>
     
  
  )
}
