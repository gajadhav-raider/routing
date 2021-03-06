import axios from "axios";
import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
const AddUser = ()=>{
    const [user,setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const navigate = useNavigate();
    const onInputChange = (e)=>{
        setUser({
            ...user,[e.target.name]: e.target.value})
    };
    const onSubmit =  async(e)=>{
        e.preventDefault();
         await axios.post("http://localhost:3003/users",user)
      navigate("/")
    }
    return (
        <>  
        <h1 classNameName="center">Add User</h1>
        <form onSubmit={(e)=>onSubmit(e)}>
        <div className="form-floating">
       <input type="text" className="form-control" name="name" placeholder=" Name" value={user.name} onChange={(e)=>onInputChange(e)}/>
      <label for="floatingName">Enter Your Name</label>  
      </div>
      <div className="form-floating">
       <input type="text" className="form-control" name="username" placeholder=" UserName" value={user.username} onChange={(e)=>onInputChange(e)}/>
      <label for="floatingUserName">Enter Your UserName</label>  
      </div>
        <div className="form-floating mb-3">
      <input type="email" className="form-control" name="email" placeholder="name@example.com" value={user.email} onChange={(e)=>onInputChange(e)}/>
      <label for="floatingInput">Enter Your Email address</label>
     </div>
     <div className="form-floating">
       <input type="text" className="form-control" name="phone" placeholder="Phone no" value={user.phone} onChange={(e)=>onInputChange(e)}/>
      <label for="floatingPhoneNo">Enter Your Phone No</label>  
      </div>
      <div className="form-floating">
       <input type="text" className="form-control" name="website" placeholder=" Website Name" value={user.website} onChange={(e)=>onInputChange(e)}/>
      <label for="floatingName">Enter Your Website Name</label>  
      </div>
      <div className="col-12">
    <button type="submit" className="btn btn-primary">Add User</button>
  </div>
  </form>
        </>
    );
}
export default AddUser;