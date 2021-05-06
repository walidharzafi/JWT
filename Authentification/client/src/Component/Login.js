import React, {useState} from 'react'
import axios from 'axios'
axios.defaults.withCredentials = true


function Login(props) {

    const[login, setLogin] = useState({  email:'',  password:''})
   
    const handelChange = (e)=>{
        const {name,value} = e.target
        setLogin({...login,[name]:value})
      }
    
    
    const submit = async(e) => {
          e.preventDefault()
   try {
       const res = await  axios.post("http://localhost:3001/user/login" , login, {withCredentials:true})
       if(res){
        if(!res.data.enabled) props.history.push(`/changepassword/${res.data.id}`)
        if(res.data.isAuth && res.data.role === 'admin') props.history.push('/admin')
        if(res.data.isAuth && res.data.role === 'user') props.history.push('/user')
        if(res.data.isAuth && res.data.role === 'technicien') props.history.push('/technicien')
       
    }
    } catch (error) {
        if(error) console.log(error.response);
    }

 
    }


   const form = () =>(
        <form onSubmit={submit}>
            
            
            <div className="from-group">
                <label htmlFor="email" className="text-muted">Email</label>
                <input onChange={handelChange} type="email" className="form-control" name="email" />
               
            </div>
            <div className="from-group">
                <label htmlFor="password" className="text-muted">Password</label>
                <input onChange={handelChange} type="password" className="form-control" name="password" />
               
            </div>
             <button className="btn btn-lg btn-block btn-outline-success">Login</button>
            {/* { JSON.stringify(user)} */}
        </form>
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


export default Login