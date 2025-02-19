
import React, { useState } from 'react'

export default function UserForm() {
  const[name , setName]= useState("");
  const[age , setAge]= useState("");
  return (
    <>
      <form>
       
        <h1>User Data </h1>
        <h2>UserName</h2>
        <input type="text" value={name} placeholder='Enter UserName'
         onChange={(e)=>setName(e.target.value)}/>
        
        <h2>UserAge</h2>
        <input type="text" value={age} placeholder='Enter UserName' 
        onChange={(e)=>setAge(e.target.value)}/>

        <p>name:{name}</p>
        <p>age:{age}</p>
        
      </form>
    </>
  );
}
