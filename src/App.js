import { useState } from "react";
import AdduserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./UserTable";

function App() {
 
  const usersData=[
    {
      id:1,name:"Priya",mailid:"apriya@gmail.com",mobileno:"8975493947"},
      {id:2,name:"Ridhan",mailid:"rridhan@gmail.com",mobileno:"9876543210"},
     { id:3,name:"Raja",mailid:"braja@gmail.com",mobileno:"9876453210"},

  ];
  const addUser=(user)=>{
    console.log(user)
    user.id=users.length+1;
    setUsers([...users,user]); 
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((user)=>user.id!==id));
  }
  const [users,setUsers]=useState(usersData);
  const [editing,setEditing]=useState(false);
  const initialFormState={id:null,name:'',mailid:'',mobileno:''};
  const [currentUser,setCurrentUser]=useState(initialFormState);
 const editRow=(user)=>{
   setEditing(true);
   setCurrentUser({id:user.id,name:user.name,mailid:user.mailid,mobileno:user.mobileno});
 }
 const updateUser=(id,updatedUser)=>{
   setEditing(false);
   setUsers(users.map((user)=>(user.id===id?updatedUser:user)));
 }
  return (
    
    <div className="container">
      <h1>Contact Us:</h1>
      <div className="flex-column">
        <div className="flex-large">
          {editing?(
          <div>
            <h2>Edit Form</h2>
            <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
            </div>):(
              <div>
                <AdduserForm addUser={addUser} />
          </div>
        
            )
            }
          </div>
        <div className="flex-large">
          <h2>contact Us List</h2>
          <UserTable editRow={editRow} deleteUser={deleteUser} users={users}/>
        </div>
      </div>
    </div>
   
  );
}

export default App;
