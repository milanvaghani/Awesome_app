import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const onDelete = (id) =>{
    setAddItem((olddata) => 
    olddata.filter((currdata,indx)=>{
      return  indx !== id;
    })
    )
  }
  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      {
        addItem.map((val,index)=>{
          return <Note 
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        })
      }
      <Footer />
    </>
  );
};

export default App;

// ToDoList
// const App = () => {

//   const [inputList, setInputList] = useState();
//   const [Items, setItems] = useState([]);

//   const itemEvents = (event) => {
//     setInputList(event.target.value);
//   };

//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });
//     setInputList("");
//   };

//   const deleteItems = (id) => {
//     setItems((oldItems)=>{
//       return oldItems.filter((arrElem,index)=>{
//           return index !== id;
//       })
//     })
//   }

//   return (
//     <>
//       <div className="main_div">
//         <div className="center_div">
//           <br />
//           <h1>To Do List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add An Items"
//             value={inputList}
//             onChange={itemEvents}
//           />
//           <button onClick={listOfItems}> + </button>

//           <ol>
//             {Items.map((itemval, index) => {
//               return (
//                 <ToDoLists
//                   key={index}
//                   id={index}
//                   text={itemval}
//                   onSelect={deleteItems}
//                 />
//               );
//             })}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;

// Form App
// const App = () => {
//   const [fullName, setFullName] = useState({
//     fname:"",
//     lname:"",
//     email:"",
//     phone:"",
//   });

//   const inputEvent = (event) => {

//     const {value,name} = event.target;

//     setFullName((preValue)=>{
//         return{
//           ...preValue,
//           [name] : value,
//         }
//       });
//   };

//   const onSubmits = (event) => {
//     event.preventDefault();
//     alert("Form Submitted");
//   };

//   return (
//     <>
//     <form onSubmit={onSubmits}>
//       <div>
//         <h1>Hello{fullName.fname}{fullName.lname}</h1>
//         <p>{fullName.email}</p>
//         <p>{fullName.phone}</p>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           name="fname"
//           onChange={inputEvent}
//           value={fullName.fname}
//         />
//         <input
//           type="text"
//           placeholder="Enter Your Last Name"
//           name="lname"
//           onChange={inputEvent}
//           value={fullName.lname}
//         />
//         <input
//           type="email"
//           placeholder="Enter Your Email"
//           name="email"
//           onChange={inputEvent}
//           value={fullName.email}
//         />
//         <input
//           type="number"
//           placeholder="Enter Your Phone Number"
//           name="phone"
//           onChange={inputEvent}
//           value={fullName.phone}
//         />
//        <input
//           type="text"
//           placeholder="Enter Your Qualification"
//           name="qua"
//           onChange={inputEvent}
//           value={fullName.qua}
//         />

//         <button type="submit">Submit</button>
//       </div>
//       </form>
//     </>
//   );
// };

// export default App;
