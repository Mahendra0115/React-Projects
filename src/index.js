
import React from "react";
import ReactDOM from "react-dom/client";


// import Test  from "./ClassComponent/Test";
// import Login from "./ClassComponent/Login";

//  [ Functions ]
// import TestFunction from "./FunctionComponent/TestFunction";   // here import for RegularFunction
// import TestF from "./FunctionComponent/TestFunction";           // here import for AnonymousFunction
// import  {ArrowF}  from "./FunctionComponent/TestFunction";     // here import for Fat ArrowFunction

// [ArrayObjects]

// import  ArrayOfObject  from "./ClassComponent/ArrayOfObject";
// import  ArrayOfObject  from "./FunctionComponent/ArrayOfObject";

// [Props -> ParentComponent]

// import ParentComponent from "./ClassComponent/Props/ParentComponent";
//  import ParentComponent from "./FunctionComponent/Props/ParentComponent";

// [State]
import StateExample from './ClassComponent/States/StateExample.jsx';
import UserForm from "./FunctionComponent/States/UserForm.jsx";
import UserForm2 from "./FunctionComponent/States/UserForm2.jsx";
import DarkMoDode from "./FunctionComponent/States/DarkMoDode.jsx";











// const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//    <>
//    <h1>hello export react</h1>

//     </>
//   )

// CLASS_COMPONENT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//  <>
//       <Test/>
//       <Login/>
//   </>
// )

//  [ FunctionalComponent  ]
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <TestFunction/>
//     <TestF/>

//     <ArrowF/>
//     <ArrayOfObject />

//   </>
// );

// [Props]

// const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(
//     <>
//      {/* <ParentComponent/> */}
//      <ParentComponent/>
//     </>
//   )

//  [State]
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <StateExample />
    <UserForm/>
    <UserForm2/>
     <DarkMoDode/>
  </>
);



