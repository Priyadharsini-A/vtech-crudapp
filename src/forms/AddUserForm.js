import { useState } from "react";

const AdduserForm=(props)=>
{
    const initialFormState={id:null,name:'',mailid:'',mobileno:''};
    const [user,setUser]=useState(initialFormState);
    const handleInputChange=(event)=>{
        const {name,value}=event.target;
        setUser({...user,[name]:value});        
    }
    return(
        <form onSubmit={
            event=>{
                event.preventDefault();
                if(!user.name||!user.mailid||!user.mobileno) return;
                props.addUser(user);
                setUser(initialFormState);
            }
        }>
            <label>Name</label>
            <input type="text" onChange={handleInputChange} name="name" value={user.name}/>
            <label>EmailAddress</label>
            <input type="text" onChange={handleInputChange} name="mailid" value={user.mailid}/>
            <label>Mobile Number</label>
            <input type="text" onChange={handleInputChange} name="mobileno" value={user.mobileno}/>
            <button>Submit</button>
        </form>
    );
};

export default AdduserForm;