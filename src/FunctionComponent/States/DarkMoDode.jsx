import React, { useState } from 'react'

export default function DarkMoDode() {
    const[darkMode, setDarkMode] = useState(false);

const toggleDarkMode = ()=> {
    setDarkMode(!darkMode);
}
   


  return (
   <>
       <div style={{
 backgroundColor: darkMode ? "#333" : "#fff", 
        color: darkMode ? "#fff" : "#000", 
        height: "100vh", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column"
      }}>


<h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
<button onClick={toggleDarkMode}></button>
{darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
       </div>
   </>
  )
}
