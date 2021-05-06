import React, {useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'



function ChangePasswrod(props) {

    const {id} = useParams()
    const[login, setLogin] = useState({
       
     password:''
       
    })
   const handelChange = e =>{
        setLogin({...login,[e.target.id]: e.target.value})
    }
    
    
    const submit = async(e) => {
          e.preventDefault();
          try{
            const res= await  axios.post(`http://localhost:3001/user/update/${id}` , login)
            if(res){
                if(res.data.isAuth && res.data.role ==='admin')props.history.push('/admin')
                if(res.data.isAuth && res.data.role ==='user')props.history.push('/user')
                if(res.data.isAuth && res.data.role ==='technicien')props.history.push('/technicien')
            }
          }catch (error){
            if(error) console.log(error.response);
            
          }
     
     
       

        
    }
    

   const form = () =>(
        <form onSubmit={submit}>
            
            
           
            <div className="from-group">
                <label htmlFor="password" className="text-muted">Password</label>
                <input onChange={handelChange} type="password" className="form-control" id="password" />
               
            </div>
             <button className="btn btn-lg btn-block btn-outline-success">Login</button>
           
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


export default ChangePasswrod