import React, {useState} from 'react'
import axios from 'axios'



function Register(props) {

    const[register, setRegister] = useState({
       name:'',
       email:'',
       password:'',
       
    })
   const handelChange = e =>{
        setRegister({...register,[e.target.id]: e.target.value})
    }
    
    
    const submit = async(e) => {
          e.preventDefault();
    await axios.post("http://localhost:3001/user/register" , register)
    
     .then((response) => {
        console.log(response.data)
      });
      
    

        
    }
    

   const form = () =>(
       <>
       <h1>Welcom Admin</h1>
        <form onSubmit={submit}>
            <div className="from-group">
                <label htmlFor="first_name" className="text-muted">Name</label>
                <input onChange={handelChange}  type="text" className="form-control" id="name" />
               
            </div>
            
            <div className="from-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handelChange} type="email" className="form-control" id="email" />
               
            </div>
            <div className="from-group">
                <label htmlFor="password" className="text-muted">Password</label>
                <input onChange={handelChange} type="password" className="form-control" id="password" />
               
            </div>
            
            <div className="from-group">
            <select className="browser-default custom-select" id="role" onChange={handelChange}>
          
          <option value="user">User</option>
          <option value="technicien">Technicien</option>
          </select>
            </div> 
            <button className="btn btn-lg btn-block btn-outline-success">Send</button>
            {/* { JSON.stringify(user)} */}
        </form>
        </>
   )
   return (
    
    <div>
       <div title="Contact Us">
           <div className="row"> 
               <div className="col-md-6 mx-auto">

                 { form() }
               </div>
            </div>
           

       </div>
    </div>
)
 }


export default Register